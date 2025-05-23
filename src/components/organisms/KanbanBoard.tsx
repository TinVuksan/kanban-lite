import { closestCenter, DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useKanban } from '../../hooks/useKanban';
import type { CategorizedTask, KanbanColumnType } from '../../types/Task';
import { KanbanColumn } from './KanbanColumn';

interface KanbanBoardProps {
    initialData: CategorizedTask;
}

export const KanbanBoard = ({ initialData }: KanbanBoardProps) => {
    const { state, dispatch, moveTask } = useKanban(initialData);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        const [fromColumn, taskId] = String(active.id).split(':');
        const [toColumn] = String(over.id).split(':');

        if (fromColumn !== toColumn) {
            moveTask(taskId, fromColumn as KanbanColumnType, toColumn as KanbanColumnType);
        }
    };
    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <section className="grid gap-[24px] overflow-x-auto p-[32px] md:grid-cols-2 lg:grid-cols-3">
                <KanbanColumn dispatch={dispatch} id="to_do" title="To Do" tasks={state.to_do} />
                <KanbanColumn
                    dispatch={dispatch}
                    id="in_progress"
                    title="In Progress"
                    tasks={state.in_progress}
                />
                <KanbanColumn
                    dispatch={dispatch}
                    id="completed"
                    title="Completed"
                    tasks={state.completed}
                />
            </section>
        </DndContext>
    );
};
