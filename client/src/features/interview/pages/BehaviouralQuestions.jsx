import Sidebar from "../components/interviewComponents/Sidebar.jsx";
import QuestionCard from "../components/interviewComponents/QuestionCard.jsx";
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx";

const BehaviouralQuestions = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          
          <h1 className="text-xl sm:text-2xl font-bold">
            Behavioral Questions
          </h1>

          {/* Scrollable Questions */}
          <div className="h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
            <div className="grid gap-5">
              <QuestionCard />
            </div>
          </div>

        </div>
      </div>

      {/* Right Panel (hidden on small screens) */}
      <div className="hidden lg:block w-80 p-6 border-l border-slate-800">
        <SkillGaps />
      </div>

    </div>
  );
};

export default BehaviouralQuestions;