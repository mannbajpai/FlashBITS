import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-yellowPrimary p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-bluePrimary">
                    FlashCard Tool
                </Link>
                <div>
                    <Link to="/login" className="btn btn-accent mr-4">Admin Login</Link>
                    <Link to="/admin" className="btn btn-secondary">Admin Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
