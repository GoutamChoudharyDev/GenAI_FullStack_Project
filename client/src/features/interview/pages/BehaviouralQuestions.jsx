import { useState } from "react"
import Sidebar from "../components/interviewComponents/Sidebar.jsx"
import QuestionCard from "../components/interviewComponents/QuestionCard.jsx"
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx"
import PreparationPlan from "../components/interviewComponents/PreparationPlan.jsx"
import { interviewData } from "../../../data/interviewData.js"

const BehaviouralQuestions = () => {

    return (
        <div className="flex bg-gray-800 min-h-screen">

            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-6">

                <h1 className="text-2xl font-bold">
                    Behavioral Questions
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

export default BehaviouralQuestions
