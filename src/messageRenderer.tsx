import React from "react";

export const renderMessageTemplate = (payload: any, wss: WebSocket) => {
  console.log("Message Temaplate", wss);
  switch (payload.template_type) {
    case "quick_replies":
      return (
        <li className="kore-message kore-message-bot">
          <p>{payload.text}</p>
          <ul>
            {payload.quick_replies.map((msg: any) => {
              return (
                <li value={msg.payload}>
                  <button>{msg.title}</button>
                </li>
              );
            })}
          </ul>
        </li>
      );
    case "user_message":
      return (
        <li className="kore-message kore-message-user">
          <h6>user message</h6>
        </li>
      );

    default:
      // Render nothing if template is not matched
      break;
  }
};

export interface IBotResponse {
  type: string;
  from: string;
  message: Message[];
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

export interface Message {
  type: string;
  component: Component;
  cInfo: CInfo;
}

export interface CInfo {
  body: string;
}

export interface Component {
  type: string;
  payload: ComponentPayload;
}

export interface ComponentPayload {
  type: string;
  payload: PayloadPayload;
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
