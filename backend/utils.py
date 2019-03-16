import datetime
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import jwt
import os


"""
Utils related to the app setup
"""
# app initialization
app = Flask(__name__)
app.debug = True


# Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql:///sobbingdata'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY", "")

db = SQLAlchemy(app)


token_expiry =  int(os.environ.get("TOKEN_EXPIRY", "180"))


"""
Utils related to authentication, if we choose to use it
Following the tutorial here:
https://realpython.com/token-based-authentication-with-flask/
"""
def encode_auth_token(user_id):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=token_expiry),
            'iat': datetime.datetime.utcnow(),
            'id': user_id
        }
        return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm='HS256'
        )
    except Exception as e:
        return e

def decode_auth_token(auth_token):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
        return payload['id']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'
