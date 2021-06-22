import { ISinglePhoto } from "../entities/photo";
import * as actionTypes from '../actions/actionTypes/photosTypes';

export interface IPhotoReducer {
    photos: ISinglePhoto[]
}

const defaultState = (): IPhotoReducer => ({
    photos: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotosTypes["GET_PHOTOS"] = action;
            return {
                ...state,
                photos: data.photos
            }
        }

        default: {
            return state;
        }
    }
}