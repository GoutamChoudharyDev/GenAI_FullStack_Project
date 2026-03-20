import { MessageSquare, Map } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 pt-10 space-y-2">
      <Link
        to="/interview"
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
            ${isActive("/interview") ? "bg-blue-50 text-blue-700" : "text-gray-600"}
          `}
      >
        <MessageSquare className="w-5 h-5" />
        Technical Questions
      </Link>

      <Link
        to="/interview/behavioral"
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
            ${isActive("/interview/behavioral") ? "bg-blue-50 text-blue-700" : "text-gray-600"}
          `}
      >
        <MessageSquare className="w-5 h-5" />
        Behavioural Questions
      </Link>

      <Link
        to="/interview/roadmap"
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
            ${isActive("/interview/roadmap") ? "bg-blue-50 text-blue-700" : "text-gray-600"}
          `}
      >
        <Map className="w-5 h-5" />
        Roadmap
      </Link>
    </aside>
  );
};

export default Sidebar;