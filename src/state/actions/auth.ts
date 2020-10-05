import { ADD_AUTH } from "../constants";
import { IUser } from "../../http";

export const createAuth = (payload: IUser["authorization"]) => {
  return {
    type: ADD_AUTH,
    payload: { ...payload },
  };
};
