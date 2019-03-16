from flask import Flask, request, jsonify
from sqlalchemy import create_engine
from flask_cors import CORS
from utils import app, db, encode_auth_token, decode_auth_token
from purchases import get_purchases, get_extra_car_data
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

@app.route('/extra_data/<make_and_model>')
def get_extra_data(make_and_model):
     print(make_and_model)
     return jsonify(get_extra_car_data(make_and_model))

@app.route('/messages', methods=['POST'])
def send_sms_to_user():
    content = request.json
    return jsonify(send_sms(content['number'], content['body']))

@app.route('/login', methods=['POST'])
def login():
     print(request.json)
     user = request.json['user']
     return encode_auth_token(user)



if __name__ == '__main__':
     app.run(port=port)
