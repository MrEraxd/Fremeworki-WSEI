import { ISinglePublication } from "../entities/publication";
import * as actionTypes from '../actions/actionTypes/publicationTypes';

export interface IPublicationReducer {
    publications: ISinglePublication[]
}

const defaultState = (): IPublicationReducer => ({
    publications: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PUBLICATIONS: {
            const data: actionTypes.IPublicationTypes["GET_PUBLICATIONS"] = action;
            return {
                ...state,
                publications: data.publications
            }
        }

        default: {
            return state;
        }
    }
}