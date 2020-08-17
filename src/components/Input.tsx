import React from "react";
import { connect } from "react-redux";
import { createMessagePayload } from "../http";
import cuid from 'cuid'
const InputBase = () => {
  const handleMessageSubmit = () => {
      const id = cuid();
      createMessagePayload(id,'','','')
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
