import { ISingleUser } from '../entities/user';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducer {
    usersList: ISingleUser[];
    loggedUser: ISingleUser;
    someData: string;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    loggedUser: {
        id: 1,
        name: "placeholder_name",
        username: "placeholder_username",
        email: "placeholder_email",
        address: {
            street: "placeholder_street",
            suite: "placeholder_suite",
            city: "placeholder_city",
            zipcode: "placeholder_zipcode",
            geo: {
                lat: "placeholder_lat",
                lng: "placeholder_lng"
            }
        },
        phone: "placeholder_phone",
        website: "placeholder_website",
        company: {
            name: "placeholder_name",
            catchPhrase: "placeholder_catchPharse",
            bs: "placeholder_bs"
        }
    },
    someData: ""
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes["GET_USERS"] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.GET_LOGGED_USER: {
            const data: actionTypes.IUserTypes["GET_LOGGED_USER"] = action;
            return {
                ...state,
                loggedUser: data.loggedUser
            }
        }

        case actionTypes.PUSH_DATA: {
            const data: actionTypes.IUserTypes["PUSH_DATA"] = action;
            return {
                ...state,
                someData: data.someData
            }
        }

        default: {
            return state;
        }
    }
}