import React from "react";

class WorkspaceOutput extends React.Component<{ content: string }, object>{
    render() {
        return (
            <div className={"workspace_output"}>
                <p>Поле вывода: </p>
                <textarea name={"output"} readOnly={true} value={this.props.content}></textarea>
            </div>
        )
    }
}

export default WorkspaceOutput