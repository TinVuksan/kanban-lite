import { Navigate, useLocation } from 'react-router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TOKEN_LOCAL_STORAGE } from '../utils/constants';

interface RequireAuthProps {
    children: React.ReactElement;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const { getLocalStorageItem } = useLocalStorage<string>();
    const token = getLocalStorageItem(TOKEN_LOCAL_STORAGE);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};
