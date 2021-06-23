import { Dispatch } from 'redux';
import * as actionTypes from "./actionTypes/workspaceTypes";
import { IWorkspaceInfo } from "../entities/workspace";

export const getWorkspaces = (): Promise<IWorkspaceInfo[]> => ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((workspaces: IWorkspaceInfo[]) => {
            dispatch({
                type: actionTypes.GET_WORKSPACES,
                workspaces
            })
        })
}) as any;