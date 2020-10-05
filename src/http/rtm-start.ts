import { koreHTTP } from "./http";
import { IRTMResponse } from "./rtm-start.model";

/**
 * @description The client app acquires the WebSocket (WSS) URL using
 * the following endpoint. This URL is short lived and expires
 * in 30seconds. You must ensure it is used to connect before expiration.
 */
export const koreRtmStart = (token: string) => {
  const payload = {
    botInfo: {
      chatBot: window.KORE_WEB_SDK_CONFIG.bot.name,
      taskBotId: window.KORE_WEB_SDK_CONFIG.bot.id,
    },
    language: "en",
    token: {},
  };
  return koreHTTP.post<IRTMResponse>("/api/1.1/rtm/start", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    transformResponse: [
      function (data: IRTMResponse) {
        // Basic error handling
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }

        // The unproxied URL returned by platform
        const { url } = data;

        // The hostname that overwrites the unproxied URL
        const { host } = new URL(window.KORE_WEB_SDK_CONFIG.baseURL);

        // Proxies the URL
        const INITIAL_WSS_URL = new URL(url);
        INITIAL_WSS_URL.host = host;

        return {
          url: INITIAL_WSS_URL.href,
        };
      },
    ],
  });
};
