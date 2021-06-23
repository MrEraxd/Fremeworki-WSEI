import { IWorkspaceInfo } from "../entities/workspace";
import * as actionTypes from '../actions/actionTypes/workspaceTypes';

export interface IWorkspaceReducer {
    workspaces: IWorkspaceInfo[]
}

const defaultState = (): IWorkspaceReducer => ({
    workspaces: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_WORKSPACES: {
            const data: actionTypes.IWorkspaceTypes["GET_WORKSPACES"] = action;
            return {
                ...state,
                workspaces: data.workspaces
            }
        }

        default: {
            return state;
        }
    }
}