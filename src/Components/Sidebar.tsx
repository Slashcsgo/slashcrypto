import React from "react";
import SideButton from "./SideButton";
import "../Styles/sidebar.css"
import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";
import ISidebar from "../Interfaces/ISidebar";

class Sidebar extends React.Component<ISidebar, object>{
    render() {
        return (
            <div className={"sidebar"}>
                <div className={"sidebar_header"}>
                    <h2>Slash Crypto</h2>
                </div>
                <SideButton type={WorkspaceTypes.caesar}
                            callback={(type) => this.props.callback(type)}/>
                <SideButton type={WorkspaceTypes.atbash}
                            callback={(type) => this.props.callback(type)}/>
                <SideButton type={WorkspaceTypes.affine}
                            callback={(type) => this.props.callback(type)}/>
            </div>
        )
    }
}

export default Sidebar