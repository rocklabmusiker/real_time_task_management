import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isAuthenticated);
    console.log(isLoggedIn)

    return isLoggedIn ? children : <Navigate to="/" />;
};
