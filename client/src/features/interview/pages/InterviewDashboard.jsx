import Sidebar from "../components/interviewComponents/Sidebar.jsx";
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx";
import Topbar from "../components/interviewComponents/Topbar.jsx";
import QuestionCard from "../components/interviewComponents/QuestionCard.jsx";

const InterviewDashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar />

        <div className="p-4 sm:p-6 lg:p-8 space-y-6">

          <h1 className="text-xl sm:text-2xl font-bold">
            Technical Questions
          </h1>

          {/* Questions */}
          <div className="grid gap-5">
            <QuestionCard />
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

export default InterviewDashboard;