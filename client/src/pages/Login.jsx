import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/admin');
        } catch (error) {
            setError('Invalid credentials');
            throw error;
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <form onSubmit={handleSubmit} className="bg-neutral p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
                {error && <p className="text-error text-center mb-4">{error}</p>}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <button type="submit" className="btn btn-accent w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
