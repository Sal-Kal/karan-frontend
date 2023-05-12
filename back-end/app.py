#!/home/sal/Codes/gits/karan-frontend/back-end/back-env/bin/python
from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

notifications = []

@app.route("/get/notifications")
def get_notification():
    if(len(notifications) == 0):
        return jsonify("No Notifications")
    else:
        response = []
        response = response + notifications
        notifications.clear()
        return jsonify(response)

@app.route("/add/notifications", methods = ['POST'])
def add_notification():
    now = datetime.now()
    response = {}
    response["dateTime"] = now.strftime("%m/%d/%Y, %H:%M:%S")
    response["image"] = request.json["image"]
    notifications.append(response)
    return jsonify("Notified")

if __name__ == '__main__':
    app.run(debug=True, port=8000, host="0.0.0.0")