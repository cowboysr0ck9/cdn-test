import React, { useEffect, useState } from "react";
import cuid from "cuid";
import { koreRtmStart } from "./http";
import { IBotResponse } from "./messageRenderer";

/**
 * @description Custom HOC that provides a WebSocket connection and lifecylce
 * management to the entire wrapped application. This HOC must be wrapped as a
 * child of the withAuth component;
 * @param WrappedComponent Any React Component that you wish to provide
 * the Kore AI WebScoket connection
 */
export const withSocket = <P extends object>(
  HOCComponent: React.ComponentType<P>
) => (props: any) => {
  useEffect(() => {
    // koreRtmStart(props.authorization.accessToken)
    //   .then((res) => {
    //     const { url } = res.data;
    //     const wss = new WebSocket(url);
    //     wss.onclose = (args) => {
    //       console.log("WSS Connection Closed");
    //       console.log(args);
    //     };
    //     wss.onopen = (args) => {
    //       setInterval(() => {
    //         const msgId = cuid();
    //         wss.send(
    //           JSON.stringify({
    //             type: "ping",
    //             resourceid: "/bot.message",
    //             botInfo: {
    //               chatBot: window.KORE_WEB_SDK_CONFIG.bot.name,
    //               taskBotId: window.KORE_WEB_SDK_CONFIG.bot.id,
    //             },
    //             client: "botbuilder",
    //             meta: { timezone: "America/New_York", locale: "en-US" },
    //             id: msgId,
    //           })
    //         );
    //       }, 29_000);
    //     };
    //     wss.onmessage = ({ data }) => {
    //       try {
    //         const payload: any = JSON.parse(data);
    //         switch (payload.type) {
    //           case "ack":
    //             console.log(payload);
    //             break;
    //           case "user_message":
    //             console.log("user_message");
    //             console.log(payload);
    //             break;
    //           case "ping":
    //             console.log(payload);
    //             break;
    //           case "pong":
    //             console.log(payload);
    //             break;
    //           case "bot_response":
    //             const { message }: IBotResponse = payload;
    //             console.log(payload);
    //             break;
    //           default:
    //             console.log("No matching payload");
    //             break;
    //         }
    //       } catch (error) {
    //         console.log("Failed to parse onMessage event");
    //       }
    //     };
    //     wss.onerror = (args) => {
    //       console.error("WSS Connection Failed");
    //       console.log(args);
    //     };
    //   })
    //   .catch((error) => {
    //     console.error("FAILURE: Unable to start WebSocket connection");
    //     console.error(error);
    //   });
    // return () => {
    //   console.log("TODO: Cleanup WebSocket connection by closing it");
    // };
  }, []);

  return <HOCComponent {...props} wss={"Kore AI WebSocket URL"} />;
};
