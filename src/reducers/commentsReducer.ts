import { ISingleComment } from "../entities/comment";
import * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentReducer {
    comments: ISingleComment[]
}

const defaultState = (): ICommentReducer => ({
    comments: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.ICommentTypes["GET_COMMENTS"] = action;
            return {
                ...state,
                comments: data.comments
            }
        }

        default: {
            return state;
        }
    }
}