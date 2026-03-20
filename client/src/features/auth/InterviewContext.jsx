// // import createContext
// import { createContext, useContext, useState } from "react";

// // create context
// const InterviewContext = createContext();

// // create and export provider
// export const InterviewProvider = ({ children }) => {
//     const [resumeFile, setResumeFile] = useState(null)
//     const [selfDesc, setSelfDesc] = useState("");
//     const [jobDesc, setJobDesc] = useState("");

//     return (
//         <InterviewContext.Provider
//             value={{
//                 resumeFile,
//                 setResumeFile,
//                 selfDesc,
//                 setSelfDesc,
//                 jobDesc,
//                 setJobDesc
//             }}
//         >
//             {children}
//         </InterviewContext.Provider>
//     );
// };

// export const useInterview = () => {
//     return useContext(InterviewContext);
// }