import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../auth/services/api"

const QuestionCard = ({ q }) => {
  const { type } = useParams(); // technical | behavioral
  const [report, setReport] = useState(null);

  const fetchReport = async () => {
    try {
      const res = await api.get("/api/interview/report");
      setReport(res.data.report)
      console.log("res data", res.data);
    } catch (error) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchReport();
  }, [])

  if (!report) return <p>Loading...</p>;

  // Dynamic selection
  const questions =
    type === "technical"
      ? report.technicalQuestions
      : report.behavioralQuestions;

  return (
    <div>

      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="p-5 bg-white rounded-xl shadow">

            <p className="font-semibold text-gray-800">
              <span>Question : </span> {q.questions}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              <span>Intention : </span> 🎯 {q.intention}
            </p>

            <p className="text-sm text-blue-600 mt-2">
              <span>Approach : </span>💡 {q.answers}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard