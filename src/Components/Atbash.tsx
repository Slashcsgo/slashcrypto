import React from "react";
import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";
import WorkspaceHelper from "../Helpers/WorkspaceHelper";
import WorkspaceInput from "./WorkspaceInput";
import WorkspaceOutput from "./WorkspaceOutput";
import IAtbashState from "../Interfaces/IAtbashState";
import AtbashCrypto from "../Model/AtbashCrypto";
import IAtbashParams from "../Interfaces/IAtbashParams";

class Atbash extends React.Component<{ type: WorkspaceTypes }, object> {
    state: IAtbashState
    constructor(props: { type: WorkspaceTypes }) {
        super(props);

        this.state = {
            input: "",
            output: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: any) {
        let newState: IAtbashState = this.state
        newState.input = event.target.value;
        this.setState(newState)
    }

    handleClick(){
        let cryptoProvider: AtbashCrypto = new AtbashCrypto()

        let params: IAtbashParams = {
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
                <div className={"workspace_controls"}>
                    <button onClick={() => this.handleClick()}>Выполнить</button>
                </div>
                <WorkspaceInput onChange={this.handleChange}/>
                <WorkspaceOutput content={this.state.output}/>
            </div>
        )
    }
}

export default Atbash