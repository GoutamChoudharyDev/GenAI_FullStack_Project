import Sidebar from "../components/interviewComponents/Sidebar.jsx"
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx"
import PreparationPlan from "../components/interviewComponents/PreparationPlan.jsx"
import { interviewData } from "../../../data/interviewData.js"

const RoadMap = () => {

    return (
        <div className="flex bg-gray-800 min-h-screen">

            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-6">
            </div>

            {/* Right Panel */}
            <div className="w-80 p-6 space-y-6">
                <SkillGaps skills={interviewData.skillGaps} />
                <PreparationPlan plan={interviewData.preparationPlan} />
            </div>

        </div>
    )
}

export default RoadMap
