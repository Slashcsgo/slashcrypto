import React from "react";
import LabeledInput from "./LabeledInput";
import RadioButton from "./RadioButton";

class CaesarControls extends React.Component<{
    onClick: () => void
    onChange: (e: React.FormEvent) => void
}, object>{
    render() {
        return(
            <div className={"workspace_controls"}>
                <RadioButton labels={["Зашифровать", "Расшифровать"]}
                             varName={"mode"} onChange={this.props.onChange}/>

                <LabeledInput fieldName={"step"} label={"Сдвиг:"} onChange={this.props.onChange}/>

                <button onClick={() => this.props.onClick()}>Выполнить</button>
            </div>
        )
    }
}

export default CaesarControls;