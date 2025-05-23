import { useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import type { IFormInput, KanbanAction, KanbanColumnType, TaskObject } from '../types/Task';

export const useCreateTodo = (dispatch: React.Dispatch<KanbanAction>) => {
    const createTodo = useCallback(
        async (data: IFormInput) => {
            const optimisticTask: TaskObject = {
                id: Date.now(),
                title: data.task_title,
                status: data.task_status as KanbanColumnType,
            };

            dispatch({ type: 'CREATE_TASK', payload: optimisticTask });

            try {
                const res = await axiosInstance.post('/todos', {
                    title: data.task_title,
                    completed: data.task_status === 'completed',
                });

                console.log('Successfully created task on server:', res.data);
            } catch (err) {
                console.error('Failed to persist task to server:', err);
            }
        },
        [dispatch]
    );

    return { createTodo };
};
