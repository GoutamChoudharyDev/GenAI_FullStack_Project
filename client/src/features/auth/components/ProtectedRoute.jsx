import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    // get auth state
    const { user, loading } = useAuth();

    // loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#242424]">
                <div className="text-white text-xl">Loading...</div>
            </div>
        )
    }

    // if not authenticated, redirect to login
    if (!user) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute
