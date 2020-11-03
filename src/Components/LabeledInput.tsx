import React from "react";

class LabeledInput extends React.Component<{
    fieldName: string
    label: string
    onChange: (e: React.FormEvent) => void
}, object>{
    render(){
        return(
            <div className={"input_labeled"}>
                <p>{this.props.label}</p>
                <input type={"number"} name={this.props.fieldName} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default LabeledInput