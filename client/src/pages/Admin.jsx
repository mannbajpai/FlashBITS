import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AdminDashboard from '../components/AdminDashboard';
const Admin = () => {
    const navigate = useNavigate();

    // Protect the route
    useAuth();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold text-bluePrimary">Admin Dashboard</h1>
                <button onClick={handleLogout} className="btn btn-error">Logout</button>
            </div>
            <AdminDashboard />
        </div>
    );
};

export default Admin;
