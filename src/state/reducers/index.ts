import { combineReducers } from "redux";

// Application Reducers
import { authorization } from "./auth";
import { userInfo } from "./user";
import { socket } from "./wss";
import { messages } from "./messages";
import { alerts } from "./alerts";

// Combines All Application Reducers
const ROOT_REDUCER = combineReducers({
  authorization,
  userInfo,
  socket,
  alerts,
  messages,
});

export default ROOT_REDUCER;
