import { InterviewReport } from "../models/interviewReport.model.js"
import { generateInterviewReport } from "../services/ai.service.js"
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

// interviewReport Controller
const generateInterviewReportController = async (req, res) => {
    try {
        // validation 
        if (!req.file) {
            return res.status(400).json({
                message: "Resume file is required"
            })
        }

        // Read pdf and extract text from it.
        const pdfResult = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
        const resumeContent = pdfResult.text;

        // get selfDescription and jobDescription from req.body
        const { selfDescription, jobDescription } = req.body;

        const interviewReportByAi = await generateInterviewReport({
            resume: resumeContent,
            selfDescription,
            jobDescription,
        })

        console.log("AI RAW RESPONSE:", interviewReportByAi);

        // Normalize AI response(Data Normalization)
        interviewReportByAi.technicalQuestions =
            (interviewReportByAi.technicalQuestions || []).map(q =>
                typeof q === "string"
                    ? {
                        questions: q,
                        intention: "Test understanding of the concept",
                        answers: "Explain clearly with real-world examples"
                    }
                    : q
            );

        interviewReportByAi.behavioralQuestions =
            (interviewReportByAi.behavioralQuestions || []).map(q =>
                typeof q === "string"
                    ? {
                        questions: q,
                        intention: "Evaluate communication and teamwork skills",
                        answers: "Use the STAR method (Situation, Task, Action, Result)"
                    }
                    : q
            );

        interviewReportByAi.skillGaps =
            (interviewReportByAi.skillGaps || []).map(s =>
                typeof s === "string"
                    ? { skill: s, severity: "Medium" }
                    : s
            );

        interviewReportByAi.preparationPlan =
            (interviewReportByAi.preparationPlan || []).map((p, index) =>
                typeof p === "string"
                    ? { day: index + 1, focus: p, tasks: p }
                    : p
            );

        const interviewReport = await InterviewReport.create({
            user: req.user.id,
            resume: resumeContent,
            selfDescription,
            jobDescription,
            ...interviewReportByAi
        })

        return res.status(201).json({
            message: "Interview Report generated successfully!",
            interviewReport
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error generating interview report"
        })
    }
}

// getinterviewReport controller
const getReportController = async (req, res) => {
    try {
        const report = await InterviewReport.findOne({
            user: req.user.id
        }).sort({ createdAt: -1 }); //latest report

        if (!report) {
            return res.status(404).json({
                message: "Report not found"
            })
        }

        return res.status(200).json({
            message: "Report fetch successfully",
            report
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error getting interview report"
        })
    }
}

export {
    generateInterviewReportController,
    getReportController
}