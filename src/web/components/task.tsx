import * as React from "react";
import { IState } from "../../core/entities/iState";
import { ITasks } from "../../core/entities/iTasks";
import {TaskList} from "../components/taskList";

export class Task extends React.Component<{}, IState>
{
    constructor(props: {}) {
        super(props);
        this.state = {
            currentTask: "",
            tasks: []
        }
    }
    public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.setState({
            currentTask: "",
            tasks: [
                ...this.state.tasks,
                {
                    id: this._thisInMilliseconds(),
                    value: this.state.currentTask,
                    completed: false
                }
            ]
        });
    }

    public toggleDone(index: number) : void {
        let task: ITasks[] = this.state.tasks.splice(index, 1);
        task[0].completed = !task[0].completed;
        const currentTasks: ITasks[] = [...this.state.tasks, ...task];
        this.setState({ tasks: currentTasks });
    }

    public deleteTask(id: number): void {
        const filteredTasks: Array<ITasks> = this.state.tasks.filter((task: ITasks) => task.id !== id);
        this.setState({ tasks: filteredTasks });
    }

    public renderTasks(): JSX.Element[] {
        return this.state.tasks.map((task: ITasks, index: number) => {
            const handleDelete = () => this.deleteTask(task.id);
            const handleToggle = () => this.toggleDone(index);
            return (<TaskList task={task} index={index} deleteTask={handleDelete} toggleDone={handleToggle}/>)
        });
    }

    public render(): JSX.Element {
        console.log(this.state);
        return (
            <div>
                <h1>React Typescript Todo List</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        className="tdl-input"
                        placeholder="Add a Task"
                        value={this.state.currentTask}
                        onChange={(e) => this.setState({ currentTask: e.target.value })} />
                    <div className="divider"/>
                    <button type="submit">Add Task</button>
                </form>
                <section> {this.renderTasks()} </section>
            </div>);
    }

    private _thisInMilliseconds(): number {
        const date: Date = new Date();
        return date.getTime();
    }
}

