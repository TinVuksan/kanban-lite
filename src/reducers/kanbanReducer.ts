import type { CategorizedTask, KanbanAction } from '../types/Task';

export const kanbanReducer = (state: CategorizedTask, action: KanbanAction): CategorizedTask => {
    switch (action.type) {
        case 'SET_INITIAL':
            return action.payload;

        case 'MOVE_TASK': {
            const { taskId, fromColumn, toColumn } = action.payload;
            const taskToMove = state[fromColumn].find((t) => String(t.id) === taskId);
            if (!taskToMove) return state;

            return {
                ...state,
                [fromColumn]: state[fromColumn].filter((t) => String(t.id) !== taskId),
                [toColumn]: [...state[toColumn], taskToMove],
            };
        }

        case 'CREATE_TASK': {
            const newTask = action.payload;
            return {
                ...state,
                [newTask.status]: [...state[newTask.status as keyof CategorizedTask], newTask],
            };
        }

        default:
            return state;
    }
};
