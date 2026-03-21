import { Routes, Route } from "react-router-dom"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import { AuthProvider } from "./features/auth/AuthContext"
import ProtectedRoute from "./features/auth/components/ProtectedRoute"
import Home from "./features/interview/pages/Home"
import InterviewDashboard from "./features/interview/pages/InterviewDashboard"
import BehaviouralQuestions from "./features/interview/pages/BehaviouralQuestions"
import RoadMap from "./features/interview/pages/RoadMap"
import { InterviewProvider } from "./features/auth/InterviewContext"

const App = () => {
  return (
    <AuthProvider>
      <InterviewProvider>
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
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview/:type"
            element={
              <ProtectedRoute>
                <InterviewDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview/:type"
            element={
              <ProtectedRoute>
                <BehaviouralQuestions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview/roadmap"
            element={
              <ProtectedRoute>
                <RoadMap />
              </ProtectedRoute>
            }
          />
        </Routes>
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
