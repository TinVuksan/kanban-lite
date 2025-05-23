import { Modal } from '@mui/material';
import type { KanbanAction } from '../../types/Task';
import { AddTaskForm } from './AddTaskForm';

interface AddTaskModalProps {
    open: boolean;
    column: string;
    dispatch: React.Dispatch<KanbanAction>;
    onClose: () => void;
}

export const AddTaskModal = ({ open, onClose, column, dispatch }: AddTaskModalProps) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="bg-background absolute top-[50%] left-[50%] min-h-[550px] w-full translate-[-50%] rounded-lg p-6 md:w-150">
                <AddTaskForm onClose={onClose} dispatch={dispatch} title={column} />
            </div>
        </Modal>
    );
};
