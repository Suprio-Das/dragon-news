import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/auth/login'></Navigate>
    );
};

export default PrivateRoute;