import { ADD_MESSAGE, REMOVE_MESSAGE, RESET_MESSAGE } from "../constants";

const initialState: any = [];

export const messages = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ADD_MESSAGE:
      return [...state, ...payload];
    case REMOVE_MESSAGE:
      return [...state, ...payload];
    case RESET_MESSAGE:
      return [...state, ...payload];
    default:
      return state;
  }
};
