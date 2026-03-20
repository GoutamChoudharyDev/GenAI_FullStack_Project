import mongoose, { Schema } from 'mongoose';

// Technical questions schema (sub schema)
const technicalQuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, "Technical question is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answers are required"]
    }
},
    { _id: false } // Disable _id for subdocuments
);

// Behavioral questions schema (sub schema)
const behavioralQuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, "Technical question is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answers are required"]
    }
},
    { _id: false }
);

// skillgap schema (sub schema)
const skillGapSchema = new Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: [true, "Severity is required"]
    }
},
    { _id: false }
)

// preparation plan schema(sub schema)
const preparationPlanSchema = new Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Focus is required"]
    },
    tasks: {
        type: String,
        required: [true, "Tasks are required"]
    }
}, { _id: false })

// Define the InterviewReport schema(Main schema)
const interviewReportSchema = new Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: [0, "Match score cannot be less than 0"],
        max: [100, "Match score cannot be greater than 100"]
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    { timestamps: true }
);

export const InterviewReport = mongoose.model("InterviewReport", interviewReportSchema)