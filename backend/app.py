from flask_cors import CORS
from utils import app, db

CORS(app)

port = 4293
@app.route('/')
def index():
    return "Hello world!"


if __name__ == '__main__':
     app.run(port=port)

