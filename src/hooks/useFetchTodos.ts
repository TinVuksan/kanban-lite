import type { CategorizedTask, TaskObject } from '../types/Task';
import { KANBAN_TASKS_LOCAL_STORAGE } from '../utils/constants';
import { mapTodosToColumns } from '../utils/mapTodosToColumns';
import { useApi } from './useApi';

export const useFetchTodos = () => {
    return useApi<TaskObject[], CategorizedTask>({
        method: 'GET',
        url: '/todos?_limit=12',
        localStorageKey: KANBAN_TASKS_LOCAL_STORAGE,
        transformForLocalStorage: mapTodosToColumns,
    });
};
