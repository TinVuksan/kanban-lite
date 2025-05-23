// src/pages/Login.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { TOKEN_LOCAL_STORAGE } from '../../utils/constants';
import { Button } from '../atoms/button';

const Login = () => {
    const { setLocalStorageItem } = useLocalStorage<string>();
    const navigate = useNavigate();
    const location = useLocation();

    // After login redirect to previous page or dashboard
    const from = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        // Here, just set a dummy JWT token string (could be any string)
        const dummyToken = 'dummy.jwt.token';
        setLocalStorageItem(TOKEN_LOCAL_STORAGE, dummyToken);

        navigate(from, { replace: true });
    };

    return (
        <main className="bg-neutral flex h-screen items-center justify-center">
            <div className="bg-primary/20 relative flex h-1/2 w-full flex-col items-center justify-center rounded-xl shadow-xl lg:w-1/2">
                <h2 className="absolute top-5 mb-4 text-3xl font-bold">
                    Press the button to generate a token!
                </h2>
                <Button
                    className="rounded-md shadow-xl"
                    size="lg"
                    variant="primary"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
        </main>
    );
};

export default Login;
