import React, { useEffect, useState } from "react";

function MessageDisplay() {
  const [messages, setMessages] = useState([]);
  const [fetchData,setFetchData] = useState(false);
  
  const handleApi = async () => {
    const response = await fetch(
      "https://www.dev.readychatai.com/messages_json?format=json"
    );
    const data = await response.json();
    setMessages(data);
  };

  useEffect(() => {
    if(fetchData == true){
        handleApi();
    }
  }, [fetchData]);

  return (
    <div className="chat-container">
        <div className = "heading">
        <h1 >AI Assistant </h1>
        <hr/>
        </div>
        <span> <button className = "btn" onClick = {()=> setFetchData(true)}> Show The Data</button>
        <button className = "btn" onClick = {()=> setFetchData(false)}> Hide The Data</button>
         </span>
      {fetchData && messages.map((message) => (
        <div key={message.id} className={message.sender_name === "bot" ? "message bot-message" : "message user-message"}>
          <div className="emoji">{message.sender_name === "bot" ? "🤖" : "👦"}</div>
          <p>{message.message_text}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
