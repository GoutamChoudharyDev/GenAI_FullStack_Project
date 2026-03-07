import { GoogleGenAI } from "@google/genai";
import { json, z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Initialize the Google GenAI client
const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
})

// Define the schema for the interview report using Zod
const interviewReportSchema = z.object({
    technicalQuestions: z.array(z.object({
        questions: z.string().describe("Technical question can be asked during the interview"),
        intention: z.string().describe("Intention of interviewer behind asking the question"),
        answers: z.string().describe("How to answer the question, what points to be covered, what approach to be used, etc.")
    })).describe("Technical questions that can be asked during the interview, along with the intention of the interviewer alwong with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        questions: z.string().describe("Behavioral question can be asked during the interview"),
        intention: z.string().describe("Intention of interviewer behind asking the question"),
        answers: z.string().describe("How to answer the question, what points to be covered, what approach to be used, etc.")
    })).describe("Behavioral questions that can be asked during the interview, along with the intention of the interviewer and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("Skill that the candidate is lacking based on the resume and job describe analysis"),
        severity: z.enum(['Low', 'Medium', 'High']).describe("Severity of the skill gap, whether it's a minor gap or a major gap that needs immediate attention")
    })).describe("Skill gaps identified based on the resume and job describe analysis"),
    preparationPlan: z.array(z.object({
        day: z.number().describe("Day number in the preparation plan, starting from 1"),
        focus: z.string().describe("Focus area for the day, such as a specific topic, skill, or type of question to practice"),
        tasks: z.string().describe("Specific tasks or activities to be completed on that day to prepare for the interview, such as studying a particular concept, practicing coding problems, or doing mock interviews")
    })).describe("Preparation plan for the interview, including daily focus areas and specific tasks to be completed")
})

export const generateInterviewReport = async ({ resume, selfDescription, jobDescription }) => {
    try {
        // prompt
        const prompt = `
You are an AI interview preparation assistant.

Analyze the candidate information and generate an interview preparation report.

IMPORTANT RULES:
- Return ONLY valid JSON
- Do NOT add explanations
- Do NOT add additional fields
- Follow the provided schema exactly

The JSON must contain ONLY these keys:
technicalQuestions
behavioralQuestions
skillGaps
preparationPlan

Candidate Information:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: zodToJsonSchema(interviewReportSchema),
                temperature: 0.1,
            }
        })

        const data = JSON.parse(response.text);
        console.log(data);

    } catch (error) {
        console.log("Error in genereateInterviewReport", error)
    }
}