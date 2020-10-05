import React, { useState } from "react";
import { createMessagePayload } from "../http";
import { connect } from "react-redux";
import cuid from "cuid";
import { createMessage, store } from "../state";

export const UserInput = ({ wss, ...props }: any) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isMessageEmpty = message.trim().length > 0;
    if (isMessageEmpty) {
      const id = cuid();
      const userMessage = {
        id,
        type: "text",
        author: "user",
        payload: { text: message.trim() },
      };
      store.dispatch(createMessage([userMessage]));
      wss.send(createMessagePayload(message.trim()));
      setMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        title={"Chatbot User Input"}
        onChange={handleInputChange}
        value={message}
        placeholder={"Enter message here"}
      ></input>
      <button hidden type="submit">
        Send
      </button>
    </form>
  );
};

export const MessageContainer = connect(null, null)(UserInput);
