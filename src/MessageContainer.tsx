import React, { CSSProperties } from "react";
import { renderMessageTemplate } from "./messageRenderer";
import { connect } from "react-redux";

const MessageContainerBase = ({ children, messages, ...props }: any) => (
  <div style={style}>
    <small style={textMuted}>{new Date().toDateString()}</small>
    {children}
    {messages.map((x: any) => renderMessageTemplate(x, props))}
  </div>
);

const mapStateToProps = (state: any) => ({
  messages: state.messages,
});

export const MessageContainer = connect(
  mapStateToProps,
  null
)(MessageContainerBase);

const style: CSSProperties = {
  height: "100%",
  overflowY: "scroll",
  backgroundColor: "#fafafa",
  fontSize: ".875rem",
  padding: "1rem 1.25rem",
  fontFamily: "sans-serif",
};

const textMuted: CSSProperties = {
  opacity: 0.25,
  textAlign: "center",
  width: "100%",
  display: "block",
};
