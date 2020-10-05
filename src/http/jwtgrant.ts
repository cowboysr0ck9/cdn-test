import { koreHTTP } from "./index";
import { IUser } from "./jwtgrant.model";

/**
 * Initial step in the Kore AI JWT OAuth 2.0 authentication flow.
 * The client app exchanges the JWT token for the ```accessToken``` on the
 * Kore AI platform Platform.
 */
export const koreJwtGrant = () => {
  const payload = {
    assertion: window.KORE_WEB_SDK_CONFIG.jwt || "",
    botInfo: {
      chatBot: window.KORE_WEB_SDK_CONFIG.bot.name || "",
      taskBotId: window.KORE_WEB_SDK_CONFIG.bot.id || "",
    },
  };

  return koreHTTP.post<IUser>("/api/1.1/oAuth/token/jwtgrant", payload);
};
