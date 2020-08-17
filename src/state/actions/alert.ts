import { ADD_ALERT } from "../constants";
import cuid from "cuid";

export const createAlert = (type: string, message: string) => {
  const id = cuid();
  return {
    type: ADD_ALERT,
    payload: {
      id,
      type,
      message,
    },
  };
};
