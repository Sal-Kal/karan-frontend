import React from "react";
// import { io } from "socket.io-client";

// let socket;

export default function NotificationTray() {
  const [list, setList] = React.useState([]);

  // React.useEffect(() => {
  //   // create websocket/connect
  //   socket = io();

  //   socket.on("chat", (data) => {
  //     // when we recieve a chat, add it into our messages array in state
  //     setList((prevList) => [data, ...prevList]);
  //   });

  //   // when component unmounts, disconnect
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // const sendTest = (e) => {
  //   e.preventDefault();
  //   // emit a message
  //   socket.emit("chat", { user: "your mom", msg: "BENKI 🔥" });
  //   console.log("emitted");
  // };

  const showToast = () => {
    setList(["BENKI 🔥", ...list]);
  };

  const clearToast = () => {
    setList([]);
  };

  return (
    <div>
      <div className="notification-body">
        {list.map((data, i) => (
          <div key={i} className="notification">
            {data}
          </div>
        ))}
      </div>
      <button className="notify-button" onClick={showToast}>
        Notify
      </button>
      <br />
      <button className="clear-button" onClick={clearToast}>
        Clear Notification
      </button>
    </div>
  );
}
