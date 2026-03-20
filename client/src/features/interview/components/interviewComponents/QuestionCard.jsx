import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../auth/services/api";

const QuestionCard = () => {
  const { type } = useParams();
  const [report, setReport] = useState(null);

  const fetchReport = async () => {
    try {
      const res = await api.get("/api/interview/report");
      setReport(res.data.report);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  if (!report) return <p className="text-white p-4">Loading...</p>;

  const questions =
    type === "technical"
      ? report.technicalQuestions
      : report.behavioralQuestions;

  return (
    <div className="h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
      
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 bg-slate-900 border border-slate-800 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Question */}
            <p className="font-semibold text-white text-sm sm:text-base">
              <span className="text-orange-400">Question: </span>
              {q.questions}
            </p>

            {/* Intention */}
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              <span className="text-orange-300">🎯 Intention: </span>
              {q.intention}
            </p>

            {/* Answer */}
            <p className="text-xs sm:text-sm text-blue-400 mt-2">
              <span className="text-blue-300">💡 Approach: </span>
              {q.answers}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;