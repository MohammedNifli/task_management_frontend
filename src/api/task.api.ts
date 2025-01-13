import { TaskData } from "../types/task.type";
import { Tasks } from "../data/task.data";


export const fetchTask = (): Promise<TaskData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Tasks), 1000);
    });
}