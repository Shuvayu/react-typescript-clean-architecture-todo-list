import * as React from "react";
import { ITasks } from "../../core/entities/iTasks";

export class TaskList extends React.PureComponent<IProps>
{
    public render() : React.ReactNode
    {
        console.log(this.props);
        return (
            <div key={this.props.task.id} className="tdl-task">
                <span className={this.props.task.completed ? "is-completed" : ""}>{this.props.task.value} </span>
                <div className="divider"/>
                <button onClick={this.props.deleteTask}>Delete</button>
                <div className="divider"/>
                <button onClick={ this.props.toggleDone}>{this.props.task.completed ? "Undo" : "Done"}</button>
            </div>
        );
    }
}

interface IProps {
    task: ITasks,
    index: number,
    deleteTask:() => void,
    toggleDone:() => void
}