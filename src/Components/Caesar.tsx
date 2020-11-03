import React from "react";
import WorkspaceHelper from "../Helpers/WorkspaceHelper";
import CaesarControls from "./CaesarControls";
import WorkspaceInput from "./WorkspaceInput";
import WorkspaceOutput from "./WorkspaceOutput";
import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";
import ICaesarState from "../Interfaces/ICaesarState";
import ICaesarParams from "../Interfaces/ICaesarParams";
import CaesarCrypto from "../Model/CaesarCrypto";

class Caesar extends React.Component<{ type: WorkspaceTypes }, object> {
    state: ICaesarState
    constructor(props: { type: WorkspaceTypes }) {
        super(props);
        this.state = {
            mode: "0",
            step: "0",
            input: "",
            output: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: any){
        let newState: ICaesarState = this.state

        switch (event.target.name){
            case "mode":
                newState.mode = event.target.value
                break
            case "step":
                newState.step = event.target.value
                break
            case "input":
                newState.input = event.target.value
                break
        }
        this.setState(newState)
    }

    handleClick(){
        let cryptoProvider: CaesarCrypto = new CaesarCrypto()

        let params: ICaesarParams = {
            mode: parseInt(this.state.mode),
            step: parseInt(this.state.step),
            input: this.state.input
        }

        let output: string = cryptoProvider.operate(params)

        this.setState({output: output})
    }

    render() {
        return (
            <div className={"workspace"}>
                <div className={"workspace_header"}>
                    <h2>{WorkspaceHelper.getHeader(this.props.type)}</h2>
                </div>
                <CaesarControls onChange={this.handleChange} onClick={() => this.handleClick()}/>
                <WorkspaceInput onChange={this.handleChange}/>
                <WorkspaceOutput content={this.state.output}/>
            </div>
        )
    }
}

export default Caesar