import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
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
