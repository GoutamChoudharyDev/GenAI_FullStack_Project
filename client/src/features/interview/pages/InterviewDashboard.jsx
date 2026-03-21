import { useState } from "react";

import Sidebar from "../components/interviewComponents/Sidebar.jsx";
import SkillGaps from "../components/interviewComponents/SkillGaps.jsx";
import QuestionCard from "../components/interviewComponents/QuestionCard.jsx";

const InterviewDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 flex transition-all duration-300
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {/* Sidebar with slide */}
        <div
          className={`w-64 bg-slate-950 border-r border-slate-800
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar />
        </div>

        {/* Overlay */}
        <div
          className="flex-1 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800">

          <h1 className="text-lg sm:text-xl font-bold">
            Technical Questions
          </h1>

          {/* 🔥 Animated Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-5 h-5">

              <span
                className={`absolute left-0 top-1 w-5 h-0.5 bg-white rounded transition-all duration-300
                ${isOpen ? "rotate-45 top-2.5" : ""}`}
              />

              <span
                className={`absolute left-0 top-2.5 w-5 h-0.5 bg-white rounded transition-all duration-300
                ${isOpen ? "opacity-0" : ""}`}
              />

              <span
                className={`absolute left-0 top-4 w-5 h-0.5 bg-white rounded transition-all duration-300
                ${isOpen ? "-rotate-45 top-2.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto h-[calc(100vh-80px)] scroll-smooth">

          {/* Questions */}
          <QuestionCard />

          {/* SkillGaps on Mobile */}
          <div className="block lg:hidden">
            <SkillGaps />
          </div>

        </div>
      </div>

      {/* Desktop Right Panel */}
      <div className="hidden lg:block w-80 p-6 border-l border-slate-800">
        <SkillGaps />
      </div>

    </div>
  );
};

export default InterviewDashboard;