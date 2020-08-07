import React, { CSSProperties } from "react";
import { renderMessageTemplate } from "./messageRenderer";

export const MessageContainer = ({ children, data, ws, ...props }: any) => {
  return (
    <div style={style}>
      <small style={textMuted}>{new Date().toDateString()}</small>
      {children}
      {data.map((x: any) => renderMessageTemplate(x, ws))}
    </div>
  );
};

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
