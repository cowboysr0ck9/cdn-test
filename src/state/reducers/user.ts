import { ADD_USER, REMOVE_USER } from "../constants";

const initialState = {};

export const userInfo = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ADD_USER:
      return { ...state, ...payload };
    case REMOVE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
