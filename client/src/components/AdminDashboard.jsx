import FlashCardList from './FlashCardList';

const AdminDashboard = () => {
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold text-pastel-blue mb-6">Admin Dashboard</h1>
            <FlashCardList />
        </div>
    );
};

export default AdminDashboard;
