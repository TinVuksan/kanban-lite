export enum TaskStatus {
    to_do = 'to_do',
    in_progress = 'in_progress',
    completed = 'completed',
}

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
    [TaskStatus.to_do]: 'To Do',
    [TaskStatus.in_progress]: 'In Progress',
    [TaskStatus.completed]: 'Completed',
};
