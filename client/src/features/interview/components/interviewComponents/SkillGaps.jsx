const SkillGaps = ({ skills }) => {
  return (
    <div className="bg-gray-600 p-5 rounded-xl shadow space-y-4">

      <h2 className="font-semibold text-lg">Skill Gap Analysis</h2>

      {skills.map((s, i) => (
        <div key={i}>
          <p className="text-sm">{s.skill}</p>

          <div className="w-full bg-gray-200 h-2 rounded mt-1">
            <div className="bg-blue-500 h-2 rounded w-2/3"></div>
          </div>

          <p className="text-xs text-gray-400">{s.severity}</p>
        </div>
      ))}

    </div>
  )
}

export default SkillGaps