import { ThemeProvider } from '@mui/material';
import { HomePage } from './components/pages/HomePage';
import { theme } from './utils/customTheme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
