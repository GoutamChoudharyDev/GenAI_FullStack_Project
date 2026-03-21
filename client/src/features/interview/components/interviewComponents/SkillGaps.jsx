import { useEffect, useState } from "react";
import { api } from "../../../auth/services/api";

const SkillGaps = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const response = await api.get("/api/interview/report");
      setSkills(response.data.report.skillGaps || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow 
                    h-[calc(100vh-120px)] lg:h-[70vh] overflow-y-auto">

      <h2 className="font-semibold text-base sm:text-lg text-white mb-4">
        Skill Gap Analysis 📊
      </h2>

      {skills.length === 0 ? (
        <p className="text-slate-400 text-sm">No skill gaps found</p>
      ) : (
        <div className="space-y-4">
          {skills.map((s, i) => {
            // convert severity → percentage (example logic)
            const severityMap = {
              High: 90,
              Medium: 60,
              Low: 30,
            };

            const width = severityMap[s.severity] || 50;

            return (
              <div key={i} className="space-y-1">
                
                {/* Skill Name */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-white font-medium">
                    {s.skill}
                  </p>
                  <span className="text-xs text-slate-400">
                    {s.severity}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-orange-500 transition-all duration-500"
                    style={{ width: `${width}%` }}
                  ></div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SkillGaps;