import React from "react";
import {ISideButton} from "../Interfaces/ISideButton";
import WorkspaceHelper from "../Helpers/WorkspaceHelper";

class SideButton extends React.Component<ISideButton, object>{
    render() {
        return (
            <div className={"sidebutton"}>
                <button className={"sidebutton_button"}
                        onClick={() => this.props.callback(this.props.type)}>
                    {WorkspaceHelper.getHeader(this.props.type)}
                </button>
            </div>
        )
    }
}

export default SideButton