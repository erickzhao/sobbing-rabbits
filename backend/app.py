from flask import Flask, request, jsonify
from sqlalchemy import create_engine
from flask_cors import CORS
from utils import app, db
from purchases import get_purchases
CORS(app)


port = 4293
@app.route('/')
def index():
    return "Hello world!"


@app.route('/purchased_cars/user/<user_id>')
def get_purchased_cars(user_id):
     return jsonify(get_purchases(user_id))


if __name__ == '__main__':
     app.run(port=port)

