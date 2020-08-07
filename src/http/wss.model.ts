export interface IWSSBotResponse {
  clientMessageId: number;
  message: WssMessage;
  resourceid: string;
  isDebugging: boolean;
  botInfo: WssBotInfo;
  client: string;
  meta: WssMeta;
  id: number;
}

export interface WssBotInfo {
  chatBot: string;
  taskBotId: string;
}

export interface WssMessage {
  body: string;
  renderMsg: string;
}

export interface WssMeta {
  timezone: string;
  locale: string;
}

export interface IWSPingRequest {
  type: string;
  resourceid: string;
  botInfo: WssBotInfo;
  client: string;
  meta: WssMeta;
  id: number;
}

export interface IWSPongRequest {
  ok: boolean;
  replyto: number;
  message: string;
  type: string;
}
