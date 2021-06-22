import { Dispatch } from 'redux';
import * as actionTypes from "./actionTypes/commentTypes";
import {ISingleComment} from "../entities/comment";

export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then((comments: ISingleComment[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                comments
            })
        })
}) as any;