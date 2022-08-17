from model import modelRun

from flask import Flask, jsonify, request

print('Flask 가동')

app = Flask(__name__)
app.run()

if __name__ == '__main__':
    app.run(host='0.0.0.0')



@app.route("/modelCall/<imgUrl>", methods=['GET'])

def modelCall(imgUrl):
    print('Flask 가동')
    # res = {
    #     'probArr': modelRun(imgUrl)}
    # return jsonify(res), 200

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
