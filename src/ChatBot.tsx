import React, { useState } from "react";
import { Header } from "./Header";
import { MessageContainer } from "./MessageContainer";

import ChatIcon from "./assets/images/comments-regular.svg";
import { withAuth } from "./withAuth";
import { withSocket } from "./withSocket";
import { pipe } from "./utils";

const ChatBotBase = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessage] = useState([{}]);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="cb-holder">
        <span className="cb-badge">1</span>
        <img src={ChatIcon} height={24} alt="Chatbot Icon"></img>
      </div>

      {isOpen && (
        <div className={"cb-container"}>
          <Header
            name={`Chatbot Name`}
            onMinimize={() => setIsOpen(!isOpen)}
            onReset={() => console.log("Chatbot Reset")}
            onMaximize={() => console.log("Chatbot Maximized")}
          />
          <MessageContainer data={messages} />
          <textarea
            onChange={(e) => {
              console.log("WSS");
            }}
            placeholder={"Enter message here"}
          ></textarea>
        </div>
      )}
    </>
  );
};

export const ChatBot = pipe(withAuth, withSocket)(ChatBotBase);
