import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";

export default interface ISidebar{
    callback: (type: WorkspaceTypes) => void
}