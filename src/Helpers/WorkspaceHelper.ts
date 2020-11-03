import {WorkspaceTypes} from "./WorkspaceTypes";

class WorkspaceHelper{
    public static getHeader(type: WorkspaceTypes){
        switch (type){
            case WorkspaceTypes.caesar:
                return("Шифр Цезаря")
            case WorkspaceTypes.atbash:
                return("Шифр Атбаш")
            case WorkspaceTypes.affine:
                return("Аффинный шифр")
        }
    }
}

export default WorkspaceHelper