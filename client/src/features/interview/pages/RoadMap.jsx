import Sidebar from "../components/interviewComponents/Sidebar.jsx";
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx";
import Topbar from "../components/interviewComponents/Topbar.jsx";
import { useEffect, useState } from "react";
import { api } from "../../auth/services/api.js";

const RoadMap = () => {
  const [report, setReport] = useState([]);

  const fetchReport = async () => {
    try {
      const response = await api.get("/api/interview/report");
      setReport(response.data.report.preparationPlan);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        <Topbar />

        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          
          <h1 className="text-xl sm:text-2xl font-bold">
            Preparation Roadmap 🚀
          </h1>

          {/* Scrollable Section */}
          <div className="h-[75vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {report.map((item) => (
                
                <div
                  key={item.day}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow hover:shadow-xl transition flex flex-col justify-between h-full"
                >
                  
                  {/* Top Content */}
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

                  {/* Button (fixed bottom) */}
                  <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm py-2 rounded-lg transition">
                    Start Day {item.day}
                  </button>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden lg:block w-80 p-6 border-l border-slate-800">
        <SkillGaps />
      </div>

    </div>
  );
};

export default RoadMap;