import { useInterview } from "../../../auth/InterviewContext";

const SelfDescription = () => {
  const { selfDesc, setSelfDesc } = useInterview();

  return (
    <div className="bg-white/95 rounded-lg shadow-sm p-8 lg:col-span-2">

      <div className="flex items-center gap-2 mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-semibold">
          2
        </span>

        <h2 className="text-xl font-bold text-gray-900">
          Self Description
        </h2>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Add a short summary about yourself.
      </p>

      <textarea
        value={selfDesc}
        onChange={(e) => setSelfDesc(e.target.value)}
        placeholder="Write about yourself..."
        className="w-full text-gray-700 h-32 p-4 border border-gray-300 rounded-lg resize-none"
      />

    </div>
  );
};

export default SelfDescription;
