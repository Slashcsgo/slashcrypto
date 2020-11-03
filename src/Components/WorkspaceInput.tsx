import React from "react";

class WorkspaceInput extends React.Component<{onChange: (e: React.FormEvent) => void}, object>{
    render() {
        return (
            <div className={"workspace_input"}>
                <p>Поле ввода: </p>
                <textarea name={"input"} onChange={this.props.onChange}></textarea>
            </div>
        )
    }
}

export default WorkspaceInput