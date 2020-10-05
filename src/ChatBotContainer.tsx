import React, { useState } from "react";
import { Header } from "./Header";
import ChatIcon from "./assets/images/comments-regular.svg";
import { withAuth } from "./withAuth";
import { pipe } from "./utils";
import { MessageContainer } from "./MessageContainer";
import { UserInput } from "./components/UserInput";

const ChatBotBase = (props: any) => {
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
            name={`Chatbot Name`}
            onMinimize={() => setIsOpen(!isOpen)}
            onReset={() => console.log("Chatbot Reset")}
            onMaximize={() => console.log("Chatbot Maximized")}
          />
          <MessageContainer {...props} />
          <UserInput {...props} />
        </div>
      )}
    </>
  );
};

export const ChatBotContainer = pipe(withAuth)(ChatBotBase);
