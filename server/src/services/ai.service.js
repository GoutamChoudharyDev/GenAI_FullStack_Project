import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Initialize the Google GenAI client
const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
})

// Define the schema for the interview report using Zod
const interviewReportSchema = z.object({
    technicalQuestions: z.array(z.object({
        question: z.string().describe("Technical question can be asked during the interview"),
        intention: z.string().describe("Intention of interviewer behind asking the question"),
        answer: z.string().describe("How to answer the question, what points to be covered, what approach to be used, etc.")
    })).describe("Technical questions that can be asked during the interview, along with the intention of the interviewer alwong with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("Behavioral question can be asked during the interview"),
        intention: z.string().describe("Intention of interviewer behind asking the question"),
        answer: z.string().describe("How to answer the question, what points to be covered, what approach to be used, etc.")
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

        const prompt = `
You are an AI interview preparation assistant.

Generate a structured interview preparation report.

IMPORTANT RULES:
- Return ONLY valid JSON
- Do NOT add explanations
- Follow the schema strictly

Example format:

{
 "technicalQuestions":[
  {
   "question":"What is closure in JavaScript?",
   "intention":"To test understanding of lexical scope",
   "answer":"Explain closure with example..."
  }
 ],
 "behavioralQuestions":[
  {
   "question":"Tell me about a challenge you solved",
   "intention":"Check problem solving ability",
   "answer":"Use STAR method"
  }
 ],
 "skillGaps":[
  {
   "skill":"System Design",
   "severity":"Medium"
  }
 ],
 "preparationPlan":[
  {
   "day":1,
   "focus":"JavaScript fundamentals",
   "tasks":"Revise closures, promises and async/await"
  }
 ]
}

Candidate Information:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

        // const response = await ai.models.generateContent({
        //     model: "gemini-2.5-flash",
        //     contents: prompt,
        //     config: {
        //         responseMimeType: "application/json",
        //         responseSchema: zodToJsonSchema(interviewReportSchema),
        //         temperature: 0.1,
        //     }
        // })

        // const data = JSON.parse(response.text);
        // console.log(data);
        // return data;


        const cleanJson = (text) => {
            if (!text) throw new Error("Empty AI response");

            return text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();
        };

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseSchema: zodToJsonSchema(interviewReportSchema),
                temperature: 0.1,
            }
        });

        const cleaned = cleanJson(response.text);
        const raw = JSON.parse(cleaned);

        // optional validation
        const validated = interviewReportSchema.parse(raw);

        return validated;

    } catch (error) {
        console.log("Error in genereateInterviewReport", error)
    }
}
