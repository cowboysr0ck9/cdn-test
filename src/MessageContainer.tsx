import React, { CSSProperties } from "react";
import { renderMessageTemplate } from "./messageRenderer";
import { connect } from "react-redux";

export const MessageContainerBase = ({ children, ws, ...props }: any) => {
  console.log("Render", props);
  return (
    <div style={style}>
      <small style={textMuted}>{new Date().toDateString()}</small>
      {children}
      {props.messages.map((x: any) => renderMessageTemplate(x, ws))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  messages: state.messages,
});

export const MessageContainer = connect(
  mapStateToProps,
  null
)(MessageContainerBase);

const style: CSSProperties = {
  height: "100%",
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
