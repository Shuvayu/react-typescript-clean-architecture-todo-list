import { ITasks} from './iTasks';

export interface IState {
    currentTask: string,
    tasks: Array<ITasks>
}