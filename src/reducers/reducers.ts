import { combineReducers } from "redux";

import users, { IUsersReducer } from './usersReducres';
import publications, { IPublicationReducer } from "./publicationsReducer";
import comments, { ICommentReducer } from "./commentsReducer";
import photos, { IPhotoReducer } from "./photosReducer";

export default combineReducers({
    users, publications, comments, photos
})

export interface IState {
    users: IUsersReducer;
    publications: IPublicationReducer;
    comments: ICommentReducer;
    photos: IPhotoReducer;
}