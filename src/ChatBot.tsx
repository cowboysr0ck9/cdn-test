import React, { useState } from "react";
import { Header } from "./Header";
import MessageContainer from "./MessageContainer";

import ChatIcon from "./assets/images/comments-regular.svg";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="cb-holder">
        <span className="cb-badge">1</span>
        <img src={ChatIcon} height={24} alt="Chatbot Icon"></img>
      </div>

      {isOpen && (
        <div className={"cb-container"}>
          <Header
            name={"Chatbot Name"}
            onMinimize={() => setIsOpen(!isOpen)}
            onReset={() => console.log("Chatbot Reset")}
            onMaximize={() => console.log("Chatbot Maximized")}
          />
          <MessageContainer data={["Hello"]}>
            <p>Test Logs</p>
          </MessageContainer>
          <textarea placeholder={"Enter message here"}></textarea>
        </div>
      )}
    </>
  );
};
