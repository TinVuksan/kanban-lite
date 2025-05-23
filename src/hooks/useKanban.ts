import { useEffect, useReducer } from 'react';
import { kanbanReducer } from '../reducers/kanbanReducer';
import type { CategorizedTask, KanbanColumnType } from '../types/Task';
import { KANBAN_TASKS_LOCAL_STORAGE } from '../utils/constants';

const init = (initialData: CategorizedTask): CategorizedTask => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(KANBAN_TASKS_LOCAL_STORAGE);
        return saved ? JSON.parse(saved) : initialData;
    }
    return initialData;
};

export const useKanban = (initialData: CategorizedTask) => {
    const [state, dispatch] = useReducer(kanbanReducer, initialData, init);

    useEffect(() => {
        const saved = localStorage.getItem(KANBAN_TASKS_LOCAL_STORAGE);
        if (saved) {
            dispatch({ type: 'SET_INITIAL', payload: JSON.parse(saved) });
        } else {
            dispatch({ type: 'SET_INITIAL', payload: initialData });
        }
    }, [initialData]);

    useEffect(() => {
        console.log('State inside useEffect: ', state);
        localStorage.setItem(KANBAN_TASKS_LOCAL_STORAGE, JSON.stringify(state));
    }, [state]);

    const moveTask = (taskId: string, fromColumn: KanbanColumnType, toColumn: KanbanColumnType) => {
        dispatch({ type: 'MOVE_TASK', payload: { taskId, fromColumn, toColumn } });
    };

    return { state, dispatch, moveTask };
};
