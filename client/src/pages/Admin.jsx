import useAuth from '../hooks/useAuth';
import AdminDashboard from '../components/AdminDashboard';
import Navbar from '../components/NavbarAdmin';
const Admin = () => {

    // Route Protection
    useAuth();

    return (
        <>
            <Navbar />
            <div className="container py-4 px-10 bg-white">
                <AdminDashboard />
            </div>
        </>
    );
};

export default Admin;
