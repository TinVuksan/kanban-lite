import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Plus from '../../assets/Plus.svg';
import type { KanbanAction } from '../../types/Task';
import { AddTaskModal } from '../organisms/AddTaskModal';

export const KanbanHeader = ({
    title,
    numberOfTasks,
    columnId,
    dispatch,
}: {
    title: string;
    numberOfTasks: number;
    columnId: string;
    dispatch: React.Dispatch<KanbanAction>;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="mb-4 flex justify-between">
                <div className="flex items-center gap-1">
                    <GoDotFill className="text-primary" />
                    <h2 className="text-xl font-semibold text-gray-800">
                        {title} <span className="text-gray-400">({numberOfTasks})</span>
                    </h2>
                </div>

                <div
                    onClick={handleOpenModal}
                    className="cursor-pointer self-center rounded-full border-1 border-gray-400/50 p-[6px] hover:bg-gray-200/70"
                >
                    <img src={Plus} alt="Add task icon" />
                </div>
            </div>
            <AddTaskModal
                dispatch={dispatch}
                column={columnId}
                open={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};
