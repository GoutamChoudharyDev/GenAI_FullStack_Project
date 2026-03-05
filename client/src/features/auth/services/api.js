// ............Api Layer....................
import axios from 'axios';

// create an axios instance with the base URL and credentials
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

// register function
const register = async ({ username, email, password }) => {
    try {
        const response = await api.post("/api/auth/register", {
            username,
            email,
            password
        })

        return response.data;
    } catch (error) {
        console.log("register error : ", error);
    }
}

// login function
const login = async ({ email, password }) => {
    try {
        const response = await api.post("/api/auth/login", {
            email,
            password
        })

        return response.data;
    } catch (error) {
        console.log("login error : ", error);
    }
}

// logout function
const logout = async () => {
    try {
        const response = await api.get("/api/auth/logout");
        return response.data;
    } catch (error) {
        console.log("logout error : ", error);
    }
}

// getMe function
const getMe = async () => {
    try {
        const response = await api.get("/api/auth/get-me");
        return response.data;
    } catch (error) {
        console.log("getMe error : ", error);
    }
}

// export statements
export {
    api,
    register,
    login,
    logout,
    getMe
}