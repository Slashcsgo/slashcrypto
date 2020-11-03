import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";

export interface ISideButton{
    type: WorkspaceTypes;
    callback: (type: WorkspaceTypes) => void
}