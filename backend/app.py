from flask import Flask, request, jsonify
from sqlalchemy import create_engine
from flask_cors import CORS
from utils import app, db, encode_auth_token, decode_auth_token
from purchases import get_purchases
from messages import send_sms
CORS(app)

port = 4293
@app.route('/')
def index():
    return "Hello world!"

@app.route('/purchased_cars/<jwt>')
def get_purchased_cars(jwt):
     user_id = decode_auth_token(jwt)
     return jsonify(get_purchases(user_id))

@app.route('/messages', methods=['POST'])
def send_sms_to_user():
    notifications = request.json['notifications']
    body = ""
    for notif in notifications:
        body += "[" + notif + "] " 
    return jsonify(send_sms('number', body))

@app.route('/login/<user>')
def login(user):
     return encode_auth_token(user)

if __name__ == '__main__':
     app.run(port=port)
