#!/home/sal/Codes/gits/karan-frontend/back-end/back-env/bin/python
from flask import Flask, jsonify
from flask_cors import CORS

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

@app.route("/add/notifications")
def add_notification():
    notifications.append('BENKI 🔥')
    return jsonify("Notified")

if __name__ == '__main__':
    app.run(debug=True, port=8000, host="0.0.0.0")