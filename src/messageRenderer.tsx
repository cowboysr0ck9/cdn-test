import React from "react";
import { createMessagePayload } from "./http";

export const renderMessageTemplate = (payload: any, ...props: any) => {
  switch (payload.type) {
    case "quick_replies":
      const { quick_replies } = payload.payload;
      return (
        <li key={payload.id} className="kore-message kore-message-bot">
          <p>{payload.payload.text}</p>
          {renderQuickReplies(quick_replies, props[0].wss)}
        </li>
      );
    case "user_message":
      return (
        <li key={payload.id} className="kore-message kore-message-user">
          <h6>{payload.payload.text}</h6>
        </li>
      );
    case "text":
      return (
        <li key={payload.id} className="kore-message kore-message-user">
          <h6>{payload.payload.text}</h6>
        </li>
      );
    default:
      return (
        <li key={payload.id} className="kore-message kore-message-user">
          <p>Add this to the rendering function</p>
          <p>{JSON.stringify(payload.payload)}</p>
        </li>
      );
  }
};

export interface IBotResponse<T> {
  type: string;
  from: string;
  message: Message<T>[];
  messageId: string;
  botInfo: BotInfo;
  createdOn: Date;
  icon: string;
  traceId: string;
}

export interface BotInfo {
  chatBot: string;
  taskBotId: string;
}

export interface Message<T> {
  type: string;
  component: Component<T>;
  cInfo: CInfo;
}

export interface CInfo {
  body: string;
}

export interface Component<T> {
  type: string;
  payload: ComponentPayload<T>;
}

export interface ComponentPayload<T> {
  type: string;
  payload: T;
}

export interface PayloadPayload {
  template_type: string;
  text: string;
  quick_replies: QuickReply[];
}

export interface QuickReply {
  content_type: string;
  title: string;
  payload: string;
}

const renderQuickReplies = (quick_replies: QuickReply[], wss: WebSocket) => {
  return (
    <ul>
      {quick_replies.map((msg: QuickReply, i: number) => {
        const { payload, title } = msg;
        const message = createMessagePayload(payload);
        return (
          <li key={i} value={payload} onClick={() => wss.send(message)}>
            <button>{title}</button>
          </li>
        );
      })}
    </ul>
  );
};
