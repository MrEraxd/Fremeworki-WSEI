import { Dispatch } from 'redux';
import * as actionTypes from "./actionTypes/publicationTypes";
import {ISinglePublication} from "../entities/publication";

export const getPublications = (): Promise<ISinglePublication[]> => ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((publications: ISinglePublication[]) => {
            dispatch({
                type: actionTypes.GET_PUBLICATIONS,
                publications
            })
        })
}) as any;