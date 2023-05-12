import React from "react";
import axios from "axios";

export default function NotificationTray() {
  const [result, setResult] = React.useState([]);
  const [popupState, setPopupState] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState("");

  const clearNotifications = () => {
    let notifications = document.getElementsByClassName("notification");
    for (const notif of notifications) {
      notif.setAttribute("closed", "");
    }
    notifications[notifications.length - 1].addEventListener(
      "animationend",
      () => {
        setResult([]);
      },
      { once: true }
    );
  };

  const openPopup = (image) => {
    setPopupImage(image);
    setPopupState(true);
  };

  const closePopup = () => {
    document
      .getElementsByClassName("popup-image")[0]
      .setAttribute("closed", "");
    document
      .getElementsByClassName("close-popup")[0]
      .setAttribute("closed", "");
    document
      .getElementsByClassName("faded-background")[0]
      .setAttribute("closed", "");
    document.getElementsByClassName("faded-background")[0].addEventListener(
      "animationend",
      () => {
        setPopupImage("");
        setPopupState(false);
      },
      { once: true }
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:8000/get/notifications").then((response) => {
        if (response.data === "No Notifications") {
        } else {
          setResult((result) => result.concat(response.data));
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (popupState) {
    return (
      <div>
        <div className="notification-body">
          {result
            .slice(0)
            .reverse()
            .map((data, i) => (
              <button
                key={i - result.length + 1}
                className="notification"
                onClick={() => openPopup(data.image)}
              >
                {data.dateTime}
              </button>
            ))}
        </div>
        <br />
        <button className="clear-button" onClick={clearNotifications}>
          Clear Notification
        </button>
        <div className="faded-background"></div>
        <div className="popup-wrapper">
          <img
            src={`data:image/png;base64,${popupImage}`}
            alt="animal"
            className="popup-image"
          />
          <div className="close-button-wrapper">
            <button
              className="close-popup"
              onClick={() => {
                closePopup();
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="notification-body">
          {result
            .slice(0)
            .reverse()
            .map((data, i) => (
              <button
                key={i - result.length + 1}
                className="notification"
                onClick={() => openPopup(data.image)}
              >
                {data.dateTime}
              </button>
            ))}
        </div>
        <br />
        <button className="clear-button" onClick={clearNotifications}>
          Clear Notification
        </button>
      </div>
    );
  }
}
