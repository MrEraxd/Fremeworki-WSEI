import { combineReducers } from "redux";

import users, { IUsersReducer } from './usersReducres';
import publications, { IPublicationReducer } from "./publicationsReducer";
import comments, { ICommentReducer } from "./commentsReducer";
import photos, { IPhotoReducer } from "./photosReducer";
import workspaces, { IWorkspaceReducer } from "./workspacesReducer";

export default combineReducers({
    users, publications, comments, photos, workspaces
})

export interface IState {
    users: IUsersReducer;
    publications: IPublicationReducer;
    comments: ICommentReducer;
    photos: IPhotoReducer;
    workspaces: IWorkspaceReducer;
}