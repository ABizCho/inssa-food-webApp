from model import modelRun

from flask import Flask, jsonify, request
from markupsafe import escape

print('Flask 가동')

app = Flask(__name__)



@app.route("/modelCall/<imgUrl>", methods=['GET','POST'])
def modelCall(imgUrl):
    print(imgUrl)
    print(type(imgUrl))
    print('Flask 가동')

    result = modelRun(imgUrl)
    res = {
        'resIndex': result}
    
    # res = {
    #     'imgUrl': {imgUrl}
    # }
    return jsonify(res), 200

# def modelCallTest(imgUrl):
#     return escape(imgUrl)



@app.route("/hello", methods=['GET'])
def hello():
    print("flask: helloWorld")
    return 'helloWorld'


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


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
