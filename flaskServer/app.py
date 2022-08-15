from flask import Flask, jsonify, request

app = Flask(__name__)



@app.route("/hello", methods=['GET'])
def hello():
  return "hello world"

@app.route("/sign-up", methods=['POST'])
def sign_up():
    user = request.json
    response = {
        'name': user['name'],
        'email': user['email'],
        'password': user['password'],
        'profile': user['profile']
    }

    return jsonify(response), 200
