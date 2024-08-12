import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <nav className="bg-pastel-yellow p-4">
            <div className="navbar bg-pastel-pink rounded-2xl">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">FlashBITS</Link>
                </div>
                <div className="">
                    <button onClick={handleLogout} className="btn rounded-full btn-xl bg-neutral hover:bg-pink-100">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;
