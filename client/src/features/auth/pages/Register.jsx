// ............UI Layer....................
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js';

const Register = () => {
    const { handleRegister, loading } = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // navigate
    const navigate = useNavigate();

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister({ username, email, password });
        setEmail("");
        setUsername("");
        setPassword("");
        navigate("/login");
    }

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#242424]">
                <div className="text-white text-xl">Loading...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#242424]">
            <div className="max-w-md w-full p-8 ">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Account</h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-200">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-[#e1034d] focus:border-[#e1034d]"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-200">
                            Email address
                        </label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-[#e1034d] focus:border-[#e1034d]"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-200">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-[#e1034d] focus:border-[#e1034d]"
                            required
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer py-2 px-4 bg-[#e1034d] text-white font-semibold rounded-md hover:bg-[#c00242] focus:outline-none focus:ring-2 focus:ring-[#e1034d]"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-300">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#e1034d] hover:text-[#c00242]">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register