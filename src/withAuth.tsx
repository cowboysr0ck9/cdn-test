import React, { useEffect, useState } from "react";
import { koreJwtGrant, koreRtmStart } from "./http";
import cuid from "cuid";
// import { IBotResponse, PayloadPayload } from "./messageRenderer";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  store,
  createMessage,
  createAlert,
  createAuth,
  createUser,
} from "./state";

import { timezone, locale } from "./utils";

/**
 * @description Custom HOC that provides the application wiht access to the Kore AI
 * initial auththentication and metadata information
 * @param WrappedComponent Any React Component that you wish to provide
 * the Kore AI Authentication connection
 */
export const withAuthBase = <P extends object>(
  HOCComponent: React.ComponentType<P>
) => (props: any) => {
  const [webSocket, setWebSocket]: any = useState<WebSocket>();

  useEffect(() => {
    koreJwtGrant()
      .then((auth) => {
        const { authorization, userInfo } = auth.data;

        store.dispatch(createAuth({ ...authorization }));
        store.dispatch(createUser({ ...userInfo }));

        koreRtmStart(authorization.accessToken)
          .then((res) => {
            const { url } = res.data;
            const wss = new WebSocket(url);
            setWebSocket(wss);

            wss.onclose = (args) => {
              console.log("WSS Connection Closed");
              console.log(args);
            };
            wss.onopen = (args) => {
              setInterval(() => {
                const id = cuid();
                wss.send(
                  JSON.stringify({
                    type: "ping",
                    resourceid: "/bot.message",
                    botInfo: {
                      chatBot: window.KORE_WEB_SDK_CONFIG.bot.name,
                      taskBotId: window.KORE_WEB_SDK_CONFIG.bot.id,
                    },
                    client: "botbuilder",
                    meta: {
                      timezone: timezone,
                      locale: locale,
                    },
                    id,
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
                    const { message }: any = payload;

                    const cleanedMessagePayload = message.map((x: any) => {
                      const { payload, type } = x.component;
                      const id = cuid();
                      if (type !== "template") {
                        return {
                          id,
                          type,
                          author: "bot",
                          payload,
                        };
                      } else {
                        return {
                          id,
                          type: payload.payload.template_type,
                          author: "bot",
                          payload: payload.payload,
                        };
                      }
                    });

                    store.dispatch(createMessage([...cleanedMessagePayload]));

                    break;
                  default:
                    store.dispatch(
                      createAlert("danger", "No matching payload")
                    );
                    break;
                }
              } catch (error) {
                createAlert("danger", "Failed to parse onMessage event");
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

  return <HOCComponent {...props} wss={webSocket} />;
};
const mapStateToProps = (state: any) => ({
  authorization: state.authorization,
  userInfo: state.userInfo,
  messages: state.messages,
});

const mapDispatchToProps = {
  createMessage,
};

export const withAuth = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthBase
);
