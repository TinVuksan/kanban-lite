import LinearProgress from '@mui/material/LinearProgress';
export const ProgressBar = () => {
    return (
        <LinearProgress
            color="warning"
            variant="determinate"
            value={50}
            sx={{ height: '15px', borderRadius: '10px', width: 'fit' }}
        />
    );
};
