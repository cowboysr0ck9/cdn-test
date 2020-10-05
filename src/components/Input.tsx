import React from "react";
import { connect } from "react-redux";
import { createMessagePayload } from "../http";
const InputBase = () => {
  const handleMessageSubmit = () => {
    createMessagePayload("MEssage sent");
    console.log("Message Sent");
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <input type="text" placeholder={"Enter message here"}></input>
      <button type="submit">Send</button>
    </form>
  );
};

// Add Message Typing Action Creator Here
const mapDispatchToProps = {};

export const Input = connect(null, null)(InputBase);
