import { useDroppable } from '@dnd-kit/core';
import type { KanbanAction, TaskObject } from '../../types/Task';
import { KanbanHeader } from '../molecules/KanbanHeader';
import { KanbanCard } from './KanbanCard';

interface KanbanColumnProps {
    id: string;
    title: string;
    tasks: TaskObject[];
    dispatch: React.Dispatch<KanbanAction>;
}

export const KanbanColumn = ({ id, title, tasks, dispatch }: KanbanColumnProps) => {
    const { setNodeRef } = useDroppable({ id });
    return (
        <div
            ref={setNodeRef}
            className="h-fit flex-1 shrink-0 rounded-2xl border-1 border-gray-200 bg-gray-200/40 p-4 shadow-xs"
        >
            <KanbanHeader
                dispatch={dispatch}
                title={title}
                columnId={id}
                numberOfTasks={tasks.length}
            />
            <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                    <KanbanCard key={task.id} task={task} columnId={id} />
                ))}
            </div>
        </div>
    );
};
