// ............UI Layer....................
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js';

const Login = () => {
    const { handleLogin, loading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // navigate
    const navigate = useNavigate();

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({ email, password })
        setEmail("");
        setPassword("");
        navigate("/");
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
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-200">
                            Email address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            required
                            className="mt-1 block w-full px-3 py-2 border-2 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-[#e1034d] focus:border-[#e1034d]"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer py-2 px-4 bg-[#e1034d] text-white font-semibold rounded-md hover:bg-[#c00242] focus:outline-none focus:ring-2 focus:ring-[#e1034d]"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-300">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="text-[#e1034d] hover:text-[#c00242]">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
