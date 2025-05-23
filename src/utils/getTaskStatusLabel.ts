import { TASK_STATUS_LABELS, TaskStatus } from '../types/enums';

export function getTaskStatusLabel(status: TaskStatus): string {
    return TASK_STATUS_LABELS[status] ?? status;
}
