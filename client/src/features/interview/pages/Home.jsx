import Breadcrumb from '../components/homeComponents/Breadcrumb'
import FeatureCards from '../components/homeComponents/FeatureCards'
import Header from '../components/homeComponents/Header'
import JobDescription from '../components/homeComponents/JobDescription'
import SelfDescription from '../components/homeComponents/SelfDescription'
import UploadResume from '../components/homeComponents/UploadResume'
import CTACard from '../components/homeComponents/CTACard'

const Home = () => {
    return (
        <main className="min-h-screen bg-[#242424]">
            <div className="w-full md:px-20 px-6 md:py-12 py-8">

                <Breadcrumb />
                <Header />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <UploadResume />
                    <JobDescription />
                    <SelfDescription />
                </div>

                <CTACard />
                <FeatureCards />

            </div>
        </main>
    )
}

export default Home


























// import { useState } from "react";
// import { Upload, Target, Lightbulb, BarChart3 } from 'lucide-react';

// const Home = () => {
//     const [resumeFile, setResumeFile] = useState(null);
//     const [jobDescription, setJobDescription] = useState('');
//     const [selfDescription, setSelfDescription] = useState('');
//     const [isDragging, setIsDragging] = useState(false);

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         setIsDragging(true);
//     };

//     const handleDragLeave = (e) => {
//         e.preventDefault();
//         setIsDragging(false);
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         setIsDragging(false);
//         const files = e.dataTransfer.files;
//         if (files.length > 0) {
//             setResumeFile(files[0]);
//         }
//     };

//     const handleFileSelect = (e) => {
//         const files = e.target.files;
//         if (files.length > 0) {
//             setResumeFile(files[0]);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#242424]">
//             {/* Main Content */}
//             <div className="w-full px-8 py-12">
//                 {/* Breadcrumb */}
//                 <div className="text-sm text-gray-400 mb-4">
//                     Home / Resume Analyzer
//                 </div>

//                 {/* Header */}
//                 <div className="mb-12">
//                     <h1 className="text-5xl font-bold text-white mb-3">
//                         AI Resume Analyzer
//                     </h1>
//                     <p className="text-gray-300 text-lg">
//                         Get an in-depth match analysis between your professional profile and target job roles.
//                     </p>
//                 </div>

//                 {/* Main Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//                     {/* Upload Resume Section */}
//                     <div className="bg-white/95 rounded-lg shadow-sm p-8">
//                         <div className="flex items-center gap-2 mb-6">
//                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-semibold">
//                                 1
//                             </span>
//                             <h2 className="text-xl font-bold text-gray-900">Upload Resume</h2>
//                         </div>

//                         <div
//                             onDragOver={handleDragOver}
//                             onDragLeave={handleDragLeave}
//                             onDrop={handleDrop}
//                             className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${isDragging
//                                 ? 'border-pink-500 bg-pink-50'
//                                 : 'border-gray-300 bg-gray-50'
//                                 }`}
//                         >
//                             <div className="flex justify-center mb-4">
//                                 <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
//                                     <Upload className="w-8 h-8 text-pink-600" />
//                                 </div>
//                             </div>
//                             <p className="text-gray-700 font-medium mb-2">
//                                 Drag and drop your resume here
//                             </p>
//                             <p className="text-sm text-gray-500 mb-4">
//                                 Supported formats: PDF, DOCX, Max (10MB)
//                             </p>
//                             <input
//                                 type="file"
//                                 id="resume-upload"
//                                 className="hidden text-gray-700"
//                                 accept=".pdf,.doc,.docx"
//                                 onChange={handleFileSelect}
//                             />
//                             <label
//                                 htmlFor="resume-upload"
//                                 className="inline-block px-6 py-2 bg-white/95 border border-gray-300 rounded-lg text-gray-700 font-medium cursor-pointer hover:bg-gray-50 transition-colors"
//                             >
//                                 Select File
//                             </label>
//                             {resumeFile && (
//                                 <p className="mt-4 text-sm text-green-600 font-medium">
//                                     Selected: {resumeFile.name}
//                                 </p>
//                             )}
//                         </div>
//                     </div>

//                     {/* Job Description Section */}
//                     <div className="bg-white/95 rounded-lg shadow-sm p-8">
//                         <div className="flex items-center gap-2 mb-6">
//                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-semibold">
//                                 3
//                             </span>
//                             <h2 className="text-xl font-bold text-gray-900">Job Description</h2>
//                         </div>

//                         <p className="text-gray-600 text-sm mb-4">
//                             Paste the job description you are targeting to get a precise compatibility score.
//                         </p>

//                         <textarea
//                             placeholder="Paste the job title and description here..."
//                             value={jobDescription}
//                             onChange={(e) => setJobDescription(e.target.value)}
//                             className="w-full text-gray-700 h-48 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                         />
//                     </div>

//                     {/* Self Description Section */}
//                     <div className="bg-white/95 rounded-lg shadow-sm p-8 lg:col-span-2">
//                         <div className="flex items-center gap-2 mb-6">
//                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-semibold">
//                                 2
//                             </span>
//                             <h2 className="text-xl font-bold text-gray-900">Self Description</h2>
//                         </div>

//                         <p className="text-gray-600 text-sm mb-4">
//                             Add a short summary about yourself, your set goals, or specific strengths not mentioned in the resume.
//                         </p>

//                         <textarea
//                             placeholder="E.g., I am a Senior Frontend Developer with 8 years of experience in React and Vue, looking for a leadership role..."
//                             value={selfDescription}
//                             onChange={(e) => setSelfDescription(e.target.value)}
//                             className="w-full text-gray-700 h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                         />
//                     </div>
//                 </div>

//                 {/* CTA Card */}
//                 <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-white">
//                     <h3 className="text-2xl font-bold mb-3">Ready to analyze?</h3>
//                     <p className="text-gray-300 mb-6 max-w-2xl">
//                         Our AI will compare your resume and self-fields techniques to identify the key words and highlighting your strengths!
//                     </p>

//                     <button className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
//                         <BarChart3 className="w-5 h-5" />
//                         Generate Full Compatibility Report
//                     </button>

//                     <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
//                         <div className="flex items-center gap-2">
//                             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                             ATS Friendly
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                             Skill Matching
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                             PDF Export
//                         </div>
//                     </div>
//                 </div>

//                 {/* Feature Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                     <div className="flex gap-4">
//                         <div className="flex-shrink-0">
//                             <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
//                                 <Target className="w-6 h-6 text-pink-600" />
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-white mb-1">Tailor for keywords</h4>
//                             <p className="text-sm text-gray-400">
//                                 Get AI recommendations based on the ATS beats by...
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex gap-4">
//                         <div className="flex-shrink-0">
//                             <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
//                                 <Lightbulb className="w-6 h-6 text-pink-600" />
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-white mb-1">AI Improvements</h4>
//                             <p className="text-sm text-gray-400">
//                                 Get suggestions and templates to improve your resume. Repeat...
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex gap-4">
//                         <div className="flex-shrink-0">
//                             <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
//                                 <BarChart3 className="w-6 h-6 text-pink-600" />
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-white mb-1">Score Guarantee</h4>
//                             <p className="text-sm text-gray-400">
//                                 Understand exactly why your content is a match for the job.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home
