import React from "react";

export const renderMessageTemplate = (payload: any) => {
  switch (payload.payload.template_type) {
    case "quick_replies":
      const { quick_replies } = payload.payload;
      return (
        <li key={payload.id} className="kore-message kore-message-bot">
          <p>{payload.payload.text}</p>
          {renderQuickReplies(quick_replies)}
        </li>
      );
    case "user_message":
      return (
        <li key={payload.id} className="kore-message kore-message-user">
          <h6>user message</h6>
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

const renderQuickReplies = (quick_replies: QuickReply[]) => {
  return (
    <ul>
      {quick_replies.map((msg: QuickReply, i: number) => {
        const { payload, title } = msg;
        return (
          <li
            key={i}
            value={payload}
            onClick={() =>
              console.log("Send this value via Websocket: ", payload)
            }
          >
            <button>{title}</button>
          </li>
        );
      })}
    </ul>
  );
};
