import { IWorkspaceInfo } from "../../entities/workspace";

export const GET_WORKSPACES = "GET_WORKSPACES";

export interface IWorkspaceTypes {
    GET_WORKSPACES: {
        workspaces: IWorkspaceInfo[];
    }
}