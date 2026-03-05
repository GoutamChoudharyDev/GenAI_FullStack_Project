// ............State Layer....................
import { createContext, useState } from "react";

// create context
export const AuthContext = createContext();

// create provider
export const AuthProvider = ({ children }) => {
    // state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // provide context value 
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </AuthContext.Provider>
    )
}