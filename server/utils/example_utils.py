from flask import Flask
from controller.ApartmentController import get_apartments


app = Flask(__name__)
@app.route('/', methods=['GET'])
def get_example():
    return get_apartments()