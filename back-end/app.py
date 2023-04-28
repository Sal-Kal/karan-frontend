from flask_socketio import SocketIO, emit
from flask import Flask

app = Flask(__name__)
# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins="*")
socketio.init_app(app)

@socketio.on("chat")
def handle_chat(data):
    emit("BENKI 🔥", data, broadcast=True)
    print(data)

if __name__ == '__main__':
    socketio.run(app, debug=True)