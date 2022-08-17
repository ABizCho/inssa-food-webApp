from model import modelRun

from flask import Flask, jsonify, request

app = Flask(__name__)



@app.route("/modelCall/<imgUrl>", methods=['GET'])
def modelCall(imgUrl):
    res = {
        'probArr': modelRun(imgUrl)}
    return jsonify(res), 200

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
