import useAuth from '../hooks/useAuth';
import AdminDashboard from '../components/AdminDashboard';
import Navbar from '../components/NavbarAdmin';
const Admin = () => {


    // Protect the route
    useAuth();

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10">
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-bold text-bluePrimary">Admin Dashboard</h1>
                </div>
                <AdminDashboard />
            </div>
        </>
    );
};

export default Admin;
