from model import modelRun

from flask import Flask, jsonify, request

print('Flask 가동')

app = Flask(__name__)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
# app.run()





@app.route("/modelCall", methods=['GET'])

def modelCall():
    imgUrl = './img_image21660548025317.jpg'
    print(imgUrl)
    print(type(imgUrl))
    print('Flask 가동')

    result = modelRun(imgUrl)
    res = {
        'probArr': result}
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
