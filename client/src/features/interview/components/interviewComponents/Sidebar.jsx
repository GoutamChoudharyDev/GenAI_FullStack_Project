import { MessageSquare, Map, LogOut } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { api } from "../../../auth/services/api";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  // handleLogout
  const handleLogout = async () => {
    try {
      await api.get("/api/auth/logout");
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <aside className="w-64 h-screen flex flex-col bg-slate-900 px-3 py-6">

      {/* Top Links */}
      <div className="space-y-2">
        <Link
          to="/interview/technical"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
            ${isActive("/interview/technical") ? "bg-blue-50 text-blue-700" : "text-gray-400 hover:bg-slate-800"}
          `}
        >
          <MessageSquare className="w-5 h-5" />
          Technical Questions
        </Link>

        <Link
          to="/interview/behavioral"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
            ${isActive("/interview/behavioral") ? "bg-blue-50 text-blue-700" : "text-gray-400 hover:bg-slate-800"}
          `}
        >
          <MessageSquare className="w-5 h-5" />
          Behavioural Questions
        </Link>

        <Link
          to="/interview/roadmap"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
            ${isActive("/interview/roadmap") ? "bg-blue-50 text-blue-700" : "text-gray-400 hover:bg-slate-800"}
          `}
        >
          <Map className="w-5 h-5" />
          Roadmap
        </Link>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Logout (slightly above bottom) */}
      <div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-500/10 transition">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;