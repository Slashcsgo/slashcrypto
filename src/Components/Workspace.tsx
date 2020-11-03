import React from "react";
import {IWorkspace} from "../Interfaces/IWorkspace";
import "../Styles/workspace.css"
import {WorkspaceTypes} from "../Helpers/WorkspaceTypes"
import Caesar from "./Caesar";
import Atbash from "./Atbash";
import Affine from "./Affine";

class Workspace extends React.Component<IWorkspace, object>{
    render() {
        switch (this.props.type){
            case WorkspaceTypes.caesar:
                return <Caesar type={this.props.type}/>
            case WorkspaceTypes.atbash:
                return <Atbash type={this.props.type}/>
            case WorkspaceTypes.affine:
                return <Affine type={this.props.type}/>
        }
    }
}

export default Workspace