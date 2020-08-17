import { ADD_MESSAGE } from "../constants";

export const createMessage = (payload: any[]) => {
  return {
    type: ADD_MESSAGE,
    payload: [...payload],
  };
};
