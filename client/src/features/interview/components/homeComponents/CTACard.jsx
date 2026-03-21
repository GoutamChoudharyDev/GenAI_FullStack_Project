import { useContext, useState } from "react";
import { BarChart3 } from "lucide-react";
import { api } from "../../../auth/services/api";
import { useInterview } from "../../../auth/InterviewContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

const CTACard = () => {
    const { resumeFile, selfDesc, jobDesc, setResumeFile, setSelfDesc, setJobDesc } = useInterview();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!resumeFile || !selfDesc || !jobDesc) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("resume", resumeFile);
            formData.append("selfDescription", selfDesc);
            formData.append("jobDescription", jobDesc);

            const res = await api.post("/api/interview/", formData);

            console.log(res.data);

            // CLEAR DATA
            setResumeFile(null);
            setSelfDesc("");
            setJobDesc("");

            navigate("/interview/technical");

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
                Ready to analyze?
            </h3>

            <p className="text-gray-300 mb-6 max-w-2xl">
                Our AI will compare your resume and job description.
            </p>

            <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-8 py-4 rounded-lg flex items-center gap-2 
                ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"}`}
            >
                <BarChart3 className="w-5 h-5" />
                {loading ? "Processing..." : "Generate Full Compatibility Report"}
            </button>
        </div>
    );
};

export default CTACard;