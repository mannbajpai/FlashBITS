import { useState } from 'react';
import api from '../api';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
            navigate('/admin');
        } catch (error) {
            setError('Invalid credentials');
            throw error;
        }
    };

    return (
    <>
    <div className="navbar bg-primary flex flex-1 items-center justify-center h-full max-h-[15vh]">
  <Link to='/' className="btn btn-ghost text-xl">FlashBITS</Link>
</div>
        <div className="py-10 mb-0 flex justify-center items-center min-h-[75vh]">
            <form onSubmit={handleSubmit} className="bg-neutral mx-auto p-6 rounded-xl w-full  shadow-md max-w-3xl flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
                {error && <p className="text-error text-center mb-4">{error}</p>}
                <div className="mb-4 flex justify-center w-2/3">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4 flex justify-center w-2/3">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className=' mb-4 flex flex-row justify-between w-2/3 px-20'>
                    <button onClick={() => navigate(-1)} className="btn rounded-full btn-error w-2/5 min-w-xs">Cancel</button>
                    <button type="submit" className="btn rounded-full btn-accent w-2/5 min-w-xs">Login</button>
                </div>
            </form>
        </div>
    </>
    );
};

export default Login;
