const initialState: any = [];

export const alerts = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "ADD_ALERT":
      return [...state, ...payload];
    case "REMOVE_ALERT":
      return [...state, ...payload];
    case "RESET_ALERT":
      return [];
    default:
      return state;
  }
};
