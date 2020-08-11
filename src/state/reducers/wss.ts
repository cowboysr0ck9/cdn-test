const initialState = {};

export const socket = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "ADD_SOCKET":
      return { ...state, ...payload };
    case "REMOVE_SOCKET":
      return { ...state, ...payload };
    default:
      return state;
  }
};
