import * as React from "react";
import "../Styles/container.css"
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";

class Container extends React.Component<{}, object>{
    state: { [key: string]: WorkspaceTypes }

    constructor(props: {}) {
        super(props);
        this.state = {
            activeTab: WorkspaceTypes.caesar
        }
    }

    selectTab(type: WorkspaceTypes){
        if (type !== this.state.activeTab){
            this.setState({activeTab: type})
        }
    }

    render() {
        return (
            <div className={"container"}>
                <Sidebar callback={(type: WorkspaceTypes) => this.selectTab(type)}/>
                <Workspace type={this.state.activeTab}/>
                <p className={"watermark"}>Created by Slash</p>
            </div>
        )
    }
}

export default Container;