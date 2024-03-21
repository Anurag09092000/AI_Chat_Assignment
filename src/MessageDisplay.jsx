import React, { useEffect, useState } from "react";

function MessageDisplay() {
  const [messages, setMessages] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleApi = async () => {
    const response = await fetch(
      "https://www.dev.readychatai.com/messages_json?format=json",
    );
    const data = await response.json();
    setMessages(data);
    setShowButton(false);
  };

  useEffect(() => {
    if (fetchData == true) {
      handleApi();
    }
  }, [fetchData]);

  return (
    <div className="chat-container">
      <div className="heading">
        <h1>AI Assistant </h1>
        <hr />
      </div>
      <span>
        {showButton && (
          <button className="btn" onClick={() => setFetchData(true)}>
            May I Help You?
          </button>
        )}
        {/* <button className="btn" onClick={() => setFetchData(false)}>
          Hide The Data
        </button> */}
      </span>
      {fetchData &&
        messages.map((message) => (
          <div
            key={message.id}
            className={
              message.sender_name === "bot"
                ? "message bot-message"
                : "message user-message"
            }
          >
            <div className="message-emoji">
              <p className="emoji">
                {message.sender_name === "bot" ? "🤖" : "👦"}
              </p>
              <p className="message-text">{message.message_text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MessageDisplay;
