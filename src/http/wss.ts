import cuid from "cuid";
/**
 * @description Creates the message payload to be
 * sent via WSS back to the Kore AI platform.
 */
export const createMessagePayload = (message: string) => {
  const id = cuid();
  return JSON.stringify({
    clientMessageId: id,
    message: {
      body: message.trim(),
      attachments: [],
    },
    resourceid: "/bot.message",
    botInfo: {
      chatBot: window.KORE_WEB_SDK_CONFIG.bot.name,
      taskBotId: window.KORE_WEB_SDK_CONFIG.bot.id,
    },
    id,
  });
};
