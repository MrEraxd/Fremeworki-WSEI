import { ISinglePhoto } from "../../entities/photo";

export const GET_PHOTOS = "GET_PHOTOS";

export interface IPhotosTypes{
    GET_PHOTOS: {
        photos: ISinglePhoto[];
    }
}