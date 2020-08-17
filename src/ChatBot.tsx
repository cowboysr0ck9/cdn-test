import React from "react";
import { store } from "./state/index";
import { Provider } from "react-redux";
import { ChatBotContainer } from "./ChatBotContainer";
import { Alert } from "./components/Alert";
import { SplashScreen } from "./components/SplashScreen";

export const Chatbot = () => (
  <Provider store={store}>
    <Alert />
    <SplashScreen text={"Chatbot Name"} timeout={3500} />
    <ChatBotContainer />
  </Provider>
);
