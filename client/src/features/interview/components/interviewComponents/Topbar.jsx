// components/interviewComponents/Topbar.jsx

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-sm">
      
      {/* Left */}
      <h2 className="text-lg font-semibold text-gray-800">
        Interview Dashboard
      </h2>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
          G
        </div>

      </div>
    </div>
  );
};

export default Topbar;