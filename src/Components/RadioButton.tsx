import React from "react";
import IRadioButtonParams from "../Interfaces/IRadioButtonParams";

class RadioButton extends React.Component<IRadioButtonParams, object>{
    createInputs(): object[]{
        let inputs: object[] = []
        for (let i = 0; i < this.props.labels.length; i++) {
            let element: object = (
                <div key={i.toString()}>
                    <input id={i.toString()} className={"radio_input"}
                           type={"radio"} name={this.props.varName}
                           defaultChecked={i === 0} value={i} onChange={this.props.onChange}/>
                    <label htmlFor={i.toString()}>{this.props.labels[i]}</label>
                </div>
            )
            inputs.push(element)
        }
        return(inputs)
    }

    render() {
        return (
            <div className={"radio"}>
                {this.createInputs()}
            </div>
        )
    }
}

export default RadioButton