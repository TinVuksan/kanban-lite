export interface TaskResponse {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TaskObject {
    id: number;
    title: string;
    status: string;
}

export interface CategorizedTask {
    in_progress: TaskObject[];
    to_do: TaskObject[];
    completed: TaskObject[];
}

export interface IFormInput {
    task_title: string;
    task_status: string;
    task_description: string;
    task_priority: string;
}

export type KanbanColumnType = keyof CategorizedTask;

export type KanbanAction =
    | {
          type: 'SET_INITIAL';
          payload: CategorizedTask;
      }
    | {
          type: 'MOVE_TASK';
          payload: {
              taskId: string;
              fromColumn: KanbanColumnType;
              toColumn: KanbanColumnType;
          };
      }
    | {
          type: 'CREATE_TASK';
          payload: TaskObject;
      };
