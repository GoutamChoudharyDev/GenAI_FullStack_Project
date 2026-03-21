import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "../components/interviewComponents/Sidebar.jsx";
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx";
import { api } from "../../auth/services/api.js";

const RoadMap = () => {
  const [report, setReport] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchReport = async () => {
    try {
      const response = await api.get("/api/interview/report");
      setReport(response.data.report.preparationPlan || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-slate-950 border-r border-slate-800">
            <Sidebar />
          </div>
          <div
            className="flex-1 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800">
          <h1 className="text-lg sm:text-xl font-bold">
            Preparation Roadmap 🚀
          </h1>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          className="p-4 sm:p-6 lg:p-8 space-y-6
                     h-[calc(100vh-80px)] overflow-y-auto
                     scroll-smooth
                     scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
        >

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {report.map((item) => (
              <div
                key={item.day}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base sm:text-lg font-semibold text-orange-400">
                      Day {item.day}
                    </h2>
                    <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                      Plan
                    </span>
                  </div>

                  {/* Focus */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-white mb-1">
                      🎯 Focus
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>

                  {/* Tasks */}
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      ✅ Tasks
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.tasks}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm py-2 rounded-lg transition">
                  Start Day {item.day}
                </button>
              </div>
            ))}
          </div>

          {/* SkillGaps (Mobile) */}
          <div className="block lg:hidden">
            <SkillGaps />
          </div>

        </div>
      </div>

      {/* Desktop Right Panel */}
      <div className="hidden lg:block w-80 p-6 border-l border-slate-800">
        <SkillGaps />
      </div>

    </div>
  );
};

export default RoadMap;