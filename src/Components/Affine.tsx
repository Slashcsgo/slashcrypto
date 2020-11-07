import React from "react";
import {WorkspaceTypes} from "../Helpers/WorkspaceTypes";
import WorkspaceHelper from "../Helpers/WorkspaceHelper";
import WorkspaceInput from "./WorkspaceInput";
import WorkspaceOutput from "./WorkspaceOutput";
import AffineControls from "./AffineControls";
import IAffineState from "../Interfaces/IAffineState";
import AffineCrypto from "../Model/AffineCrypto";
import IAffineParams from "../Interfaces/IAffineParams";

class Affine extends React.Component<{ type: WorkspaceTypes }, object>{
    state: IAffineState
    constructor(props: {type: WorkspaceTypes}) {
        super(props);
        this.state = {
            mode: "0",
            aNumber: "0",
            bNumber: "0",
            input: "",
            output: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: any){
        let newState: IAffineState = this.state

        switch(event.target.name){
            case "mode":
                newState.mode = event.target.value
                break
            case "aNumber":
                newState.aNumber = event.target.value
                break
            case "bNumber":
                newState.bNumber = event.target.value
                break
            case "input":
                newState.input = event.target.value
                break
        }

        this.setState(newState)
    }

    handleClick(){
        if (parseInt(this.state.aNumber) > 0 && parseInt(this.state.bNumber) > 0){
            let cryptoProvider: AffineCrypto = new AffineCrypto()
            let params: IAffineParams = {
                mode: parseInt(this.state.mode),
                a: parseInt(this.state.aNumber),
                b: parseInt(this.state.bNumber),
                input: this.state.input
            }
            let output: string = cryptoProvider.operate(params)
            this.setState({output: output})
        }
        else{
            this.setState({output: "Числа \"a\" и \"b\" должны быть больше нуля"})
        }
    }

   render() {
       return (
           <div className={"workspace"}>
               <div className={"workspace_header"}>
                   <h2>{WorkspaceHelper.getHeader(this.props.type)}</h2>
               </div>
               <AffineControls onChange={this.handleChange} onClick={() => this.handleClick()}/>
               <WorkspaceInput onChange={this.handleChange}/>
               <WorkspaceOutput content={this.state.output}/>
           </div>
       )
   }
}

export default Affine