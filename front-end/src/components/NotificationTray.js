import React from "react";
import axios from "axios";

export default function NotificationTray() {
  const [list, setList] = React.useState([]);

  const clearToast = () => {
    setList([]);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:8000/get/notifications").then((response) => {
        if (response.data === "No Notifications") {
        } else {
          setList((list) => [response.data, ...list]);
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="notification-body">
        {list.map((data, i) => (
          <div key={i} className="notification">
            {data}
          </div>
        ))}
      </div>
      <br />
      <button className="clear-button" onClick={clearToast}>
        Clear Notification
      </button>
    </div>
  );
}
