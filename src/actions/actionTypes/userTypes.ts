import { ISingleUser } from "../../entities/user";

export const GET_USERS = "GET_USERS";
export const GET_LOGGED_USER = "GET_LOGGED_USER";
export const PUSH_DATA = "PUSH_DATA";

export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    }
    GET_LOGGED_USER: {
        loggedUser: ISingleUser;
    }
    PUSH_DATA: {
        someData: string;
    }
}