const JobDescription = () => {
  return (
    <div className="bg-white/95 rounded-lg shadow-sm p-8">

      <div className="flex items-center gap-2 mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-semibold">
          3
        </span>

        <h2 className="text-xl font-bold text-gray-900">
          Job Description
        </h2>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Paste the job description you are targeting to get a precise compatibility score.
      </p>

      <textarea
        placeholder="Paste the job title and description here..."
        className="w-full text-gray-700 h-48 p-4 border border-gray-300 rounded-lg resize-none"
      />

    </div>
  );
};

export default JobDescription;