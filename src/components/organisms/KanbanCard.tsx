import { useDraggable } from '@dnd-kit/core';
import type { TaskObject } from '../../types/Task';

import Chat from '../../assets/Chat.svg';
import CheckCircle from '../../assets/CheckCircle.svg';
import type { TaskStatus } from '../../types/enums';
import { getTaskStatusLabel } from '../../utils/getTaskStatusLabel';
import { Label } from '../atoms/label';
import { ProgressBar } from '../atoms/progressbar';
import { AvatarStack } from '../molecules/AvatarStack';

interface KanbanCardProps {
    task: TaskObject;
    columnId: string;
}

export const KanbanCard = ({ task, columnId }: KanbanCardProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${columnId}:${task.id}`,
    });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: transform
                    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
                    : undefined,
            }}
            {...listeners}
            {...attributes}
            className={`flex max-w-[600px] cursor-move ${transform && `z-40`} flex-col rounded-3xl border-1 border-gray-300/80 bg-white p-3 shadow-sm`}
        >
            <div className="mb-4">
                <Label variant="primary">Important</Label>
                <h1 className="mt-3 text-lg font-bold">{task.title}</h1>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-gray-600">
                        {getTaskStatusLabel(task.status as TaskStatus)}
                    </h2>
                    <h2 className="font-bold">50%</h2>
                </div>
                <ProgressBar />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <AvatarStack maxDisplayed={4} />
                <div className="flex gap-2">
                    <div className="flex gap-1 font-bold">
                        <img src={Chat} alt="Circle icon" />
                        <h2>11</h2>
                    </div>
                    <div className="flex gap-1 font-bold">
                        <img src={CheckCircle} alt="Circle icon" />
                        <h2>182</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
