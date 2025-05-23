import type { CategorizedTask, IFormInput, TaskObject, TaskResponse } from '../types/Task';
import { axiosInstance } from './axiosInstance';

export const getTodos = async (): Promise<CategorizedTask> => {
    const { data } = await axiosInstance.get<TaskResponse[]>('/todos?_limit=12');

    const mappedData: TaskObject[] = data.map((todo) => ({
        id: todo.id,
        title: todo.title,
        status: todo.completed ? 'Done' : 'Not Done',
    }));

    const categorizedData: CategorizedTask = {
        in_progress: [],
        to_do: [],
        completed: [],
    };

    mappedData.forEach((todo, index) => {
        if (index % 3 === 0) categorizedData.to_do.push(todo);
        else if (index % 3 === 1) categorizedData.in_progress.push(todo);
        else categorizedData.completed.push(todo);
    });

    return categorizedData;
};

export const createIssue = async (payload: IFormInput) => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const response = await axiosInstance.post('/todos', {
        userId: randomId,
        title: payload.task_title,
        completed: payload.task_status === 'completed',
    });
    return response.data;
};
