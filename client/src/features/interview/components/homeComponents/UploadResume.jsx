import { Upload } from "lucide-react";
import { useState } from "react";

const UploadResume = () => {
    // useStates....
    const [resumeFile, setResumeFile] = useState(null)
    const [isDragging, setIsDragging] = useState(false);

    // handleFileChange
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResumeFile(file)
        }
    }

    // handleDragOver
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    }

    // handleDragLeave
    const handleDragLeave = () => {
        setIsDragging(true);
    }

    // handleDrop
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(true);

        const file = e.dataTransfer.files[0];
        if (file) {
            setResumeFile(file);
        }
    }
    return (
        <div className="bg-white/95 rounded-lg shadow-sm p-8">

            <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-semibold">
                    1
                </span>

                <h2 className="text-xl font-bold text-gray-900">
                    Upload Resume
                </h2>
            </div>

            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-12 text-center border-gray-300 bg-gray-50
                    ${isDragging ? "border-pink-500 bg-pink-50" : "border-gray-300 bg-gray-50"}
                    `}
            >

                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-pink-600" />
                    </div>
                </div>

                <p className="text-gray-700 font-medium mb-2">
                    Drag and drop your resume here
                </p>

                <p className="text-sm text-gray-500 mb-4">
                    Supported formats: PDF(5MB)
                </p>

                <input
                    type="file"
                    className="text-gray-700 hidden"
                    id="uploadResume"
                    accept=".pdf"
                    onChange={handleFileChange}
                />

                <label
                    htmlFor="uploadResume"
                    className="px-6 py-2 cursor-pointer bg-white border border-gray-300 rounded-lg text-gray-700 font-medium">
                    Select File
                </label>

                {/* Show file name */}
                {resumeFile && (
                    <p className="mt-4 text-pink-600 text-sm">
                        Selected: {resumeFile.name}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UploadResume;