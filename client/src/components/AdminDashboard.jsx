import { Link } from 'react-router-dom';
import FlashCardList from './FlashCardList';

const AdminDashboard = () => {
    return (
        <div className="container">
            <div className='flex flex-row justify-between m-10'>
                <h1 className="text-3xl font-bold text-pastel-blue">Admin Dashboard</h1>
                <Link to='create' className='btn btn-lg rounded-full border-white bg-primary hover:bg-secondary'>Add Flashcard</Link>
            </div>
            <FlashCardList />
        </div>
    );
};

export default AdminDashboard;
