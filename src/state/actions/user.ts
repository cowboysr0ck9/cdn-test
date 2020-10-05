import { ADD_USER } from "../constants";
import { IUser } from "../../http";

export const createUser = (payload: IUser["userInfo"]) => {
  return {
    type: ADD_USER,
    payload: { ...payload },
  };
};
