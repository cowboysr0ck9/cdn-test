// WSS Send Message

/**
 * @description Creates the message payload to be
 * sent via WSS back to the Kore AI platform.
 */
export const createMessagePayload = (
  id: string,
  botId: string,
  botName: string,
  message: string
) =>
  JSON.stringify({
    clientMessageId: id,
    message: {
      body: message,
      attachments: [],
    },
    resourceid: "/bot.message",
    botInfo: {
      chatBot: botName,
      taskBotId: botId,
    },
    id,
  });
