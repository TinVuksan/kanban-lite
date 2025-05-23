import type { CategorizedTask, TaskObject } from '../types/Task';

export const mapTodosToColumns = (tasks: TaskObject[]): CategorizedTask => {
    const columns: CategorizedTask = {
        to_do: [],
        in_progress: [],
        completed: [],
    };

    tasks.forEach((task, index) => {
        const mod = index % 3;
        const mappedTask = {
            id: task.id,
            title: task.title,
            status: mod === 0 ? 'to_do' : mod === 1 ? 'in_progress' : 'completed',
        };

        if (mappedTask.status === 'to_do') columns.to_do.push(mappedTask);
        if (mappedTask.status === 'in_progress') columns.in_progress.push(mappedTask);
        if (mappedTask.status === 'completed') columns.completed.push(mappedTask);
    });

    return columns;
};
