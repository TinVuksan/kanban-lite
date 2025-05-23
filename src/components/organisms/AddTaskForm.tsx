import { yupResolver } from '@hookform/resolvers/yup';
import {
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { useCreateTodo } from '../../hooks/useCreateTodo';
import type { IFormInput, KanbanAction } from '../../types/Task';

interface AddTaskFormProps {
    title: string;
    dispatch: React.Dispatch<KanbanAction>;
    onClose: () => void;
}

const schema = yup.object().shape({
    task_title: yup.string().required('Task title is required'),
    task_status: yup.string().required('Status is required'),
    task_description: yup.string().required('Description is required'),
    task_priority: yup.string().required('Priority is required'),
});

export const AddTaskForm = ({ title, dispatch, onClose }: AddTaskFormProps) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            task_title: '',
            task_status: title,
            task_description: '',
            task_priority: '',
        },
    });

    const { createTodo } = useCreateTodo(dispatch);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        createTodo(data);
        reset();
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
            <h2 className="text-xl font-semibold">New Issue</h2>

            <Controller
                name="task_title"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        margin="normal"
                        label="Summary"
                        error={!!errors.task_title}
                        helperText={errors.task_title?.message}
                        variant="outlined"
                    />
                )}
            />

            <FormControl fullWidth error={!!errors.task_status}>
                <InputLabel id="status-label">Status</InputLabel>
                <Controller
                    name="task_status"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} labelId="status-label" label="Status">
                            <MenuItem value="to_do">To Do</MenuItem>
                            <MenuItem value="in_progress">In Progress</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Select>
                    )}
                />
                <FormHelperText>{errors.task_status?.message}</FormHelperText>
            </FormControl>

            <Controller
                name="task_description"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label="Description"
                        multiline
                        margin="normal"
                        rows={4}
                        error={!!errors.task_description}
                        helperText={errors.task_description?.message}
                        variant="outlined"
                    />
                )}
            />

            <FormControl fullWidth error={!!errors.task_priority}>
                <InputLabel id="priority-label">Priority</InputLabel>
                <Controller
                    name="task_priority"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} labelId="priority-label" label="Priority">
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    )}
                />
                <FormHelperText>{errors.task_priority?.message}</FormHelperText>
            </FormControl>

            <div className="flex justify-end">
                <Button
                    sx={{ marginTop: '12px' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Create Issue
                </Button>
            </div>
        </form>
    );
};
