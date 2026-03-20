// ............Hooks Layer....................
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { login, register, logout, getMe } from "../services/api";

// custom hook to use auth context
export const useAuth = () => {
    // get context
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    // handle register
    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const data = await register({ username, email, password });
            setUser(data.user);
            setLoading(false);
        } catch (error) {
            console.log("Registration failed:", error);
            setLoading(false);
        }
    }

    // handle login
    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true);
            const data = await login({ email, password });
            setUser(data.user);
            setLoading(false);
        } catch (error) {
            console.log("Login failed:", error);
            setLoading(false);
        }
    }

    // handle logout
    const handleLogout = async () => {
        try {
            setLoading(true);
            const data = await logout();
            setUser(null);
            setLoading(false);
        } catch (error) {
            console.log("Logout failed:", error);
            setLoading(false);
        }
    }

    // check if user is authenticated on mount
    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe();
                setUser(data.user);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        getAndSetUser();
    }, []);

    // return context and handlers
    return { user, loading, handleRegister, handleLogin, handleLogout };
}
