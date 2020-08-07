import React, { useEffect, useState } from "react";
import { koreJwtGrant, IUser, koreRtmStart } from "./http";
import cuid from "cuid";
import { IBotResponse } from "./messageRenderer";

/**
 * @description Custom HOC that provides the application wiht access to the Kore AI
 * initial auththentication and metadata information
 * @param WrappedComponent Any React Component that you wish to provide
 * the Kore AI Authentication connection
 */
export const withAuth = <P extends object>(
  HOCComponent: React.ComponentType<P>
) => (props: any) => {
  const [authorization, setAuthorization] = useState<IUser["authorization"]>();
  const [userInfo, setUserInfo] = useState<IUser["userInfo"]>();
  const [wss, setWss]: any = useState(null);
  useEffect(() => {
    koreJwtGrant()
      .then((auth) => {
        const { data } = auth;
        setAuthorization({
          ...authorization,
          ...data.authorization,
        });
        setUserInfo({ ...userInfo, ...data.userInfo });
        koreRtmStart(data.authorization.accessToken)
          .then((res) => {
            const { url } = res.data;
            const wss = new WebSocket(url);
            setWss(wss);
            wss.onclose = (args) => {
              console.log("WSS Connection Closed");
              console.log(args);
            };
            wss.onopen = (args) => {
              setInterval(() => {
                const msgId = cuid();
                wss.send(
                  JSON.stringify({
                    type: "ping",
                    resourceid: "/bot.message",
                    botInfo: {
                      chatBot: window.KORE_WEB_SDK_CONFIG.bot.name,
                      taskBotId: window.KORE_WEB_SDK_CONFIG.bot.id,
                    },
                    client: "botbuilder",
                    meta: { timezone: "America/New_York", locale: "en-US" },
                    id: msgId,
                  })
                );
              }, 29_000);
            };
            wss.onmessage = ({ data }) => {
              try {
                const payload: any = JSON.parse(data);
                switch (payload.type) {
                  case "ack":
                    console.log(payload);
                    break;
                  case "user_message":
                    console.log("user_message");
                    console.log(payload);
                    break;
                  case "ping":
                    console.log(payload);
                    break;
                  case "pong":
                    console.log(payload);
                    break;
                  case "bot_response":
                    const { message }: IBotResponse = payload;
                    console.log(payload);
                    break;
                  default:
                    console.log("No matching payload");
                    break;
                }
              } catch (error) {
                console.log("Failed to parse onMessage event");
              }
            };
            wss.onerror = (args) => {
              console.error("WSS Connection Failed");
              console.log(args);
            };
          })
          .catch((error) => {
            console.error("FAILURE: Unable to start WebSocket connection");
            console.error(error);
          });
        return () => {
          console.log("TODO: Cleanup WebSocket connection by closing it");
        };
      })
      .catch((error) => {
        console.error("FAILURE: Unable to authenticate with Platform");
        console.error(error);
      });
  }, []);

  return (
    <HOCComponent
      {...props}
      wss={wss}
      authorization={authorization}
      userInfo={userInfo}
    />
  );
};
