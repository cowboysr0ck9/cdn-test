import { ADD_AUTH, RESET_AUTH } from "../constants";

const initialState = {};

export const authorization = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ADD_AUTH:
      return { ...state, ...payload };
    case RESET_AUTH:
      return {};
    default:
      return state;
  }
};
