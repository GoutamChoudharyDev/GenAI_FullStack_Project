import Sidebar from "../components/interviewComponents/Sidebar.jsx"
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx"
import PreparationPlan from "../components/interviewComponents/PreparationPlan.jsx"
import { interviewData } from "../../../data/interviewData.js"
import Topbar from "../components/interviewComponents/Topbar.jsx"
import QuestionCard from "../components/interviewComponents/QuestionCard.jsx"

const InterviewDashboard = () => {

    return (
        <div className="flex bg-gray-800 min-h-screen">

            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-6">
                {/* <Topbar /> */}
                <h1 className="text-2xl font-bold">
                    Technical Questions
                </h1>

                <div className="grid gap-5">
                    <QuestionCard />
                </div>

            </div>

            {/* Right Panel */}
            <div className="w-80 p-6 space-y-6">
                <SkillGaps skills={interviewData.skillGaps} />
                <PreparationPlan plan={interviewData.preparationPlan} />
            </div>

        </div>
    )
}

export default InterviewDashboard