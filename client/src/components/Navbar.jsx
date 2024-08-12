import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-pastel-yellow p-4">
            <div className="navbar bg-pastel-pink rounded-xl">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">FlashBITS</Link>
                </div>
                <div className="">
                    <Link to='/login' className="btn btn-xl bg-neutral hover:bg-pink-100">
                        Admin Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;
