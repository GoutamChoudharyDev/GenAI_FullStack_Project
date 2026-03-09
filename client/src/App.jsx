import { Routes, Route } from "react-router-dom"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import { AuthProvider } from "./features/auth/AuthContext"
import ProtectedRoute from "./features/auth/components/ProtectedRoute"
import Home from "./features/interview/pages/Home"

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="min-h-screen flex items-center justify-center bg-[#242424]">
                <Home />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
