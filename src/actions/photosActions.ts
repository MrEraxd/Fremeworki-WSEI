import { Dispatch } from 'redux';
import * as actionTypes from "./actionTypes/photosTypes";
import {ISinglePhoto} from "../entities/photo";

export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then((photos: ISinglePhoto[]) => {
            dispatch({
                type: actionTypes.GET_PHOTOS,
                photos
            })
        })
}) as any;