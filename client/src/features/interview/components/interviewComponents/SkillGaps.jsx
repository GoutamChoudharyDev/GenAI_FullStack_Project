import { useEffect, useState } from "react";
import { api } from "../../../auth/services/api";

const SkillGaps = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const response = await api.get("/api/interview/report");
    setSkills(response.data.report.skillGaps);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
      
      <h2 className="font-semibold text-base sm:text-lg text-white mb-4">
        Skill Gap Analysis 📊
      </h2>

      <div className="space-y-4">
        {skills.map((s, i) => (
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
                className="h-2 rounded-full bg-orange-500"
                style={{ width: "65%" }}   // static UI only
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGaps;