const PreparationPlan = ({ plan }) => {
    return (
        <div className="bg-gray-600 p-5 rounded-xl shadow mt-6 space-y-4">

            <h2 className="font-semibold text-lg">Preparation Plan</h2>

            {plan.map((p) => (
                <div key={p.day} className="border-b pb-2">
                    <p className="font-medium">Day {p.day}</p>
                    <p className="text-sm text-gray-600">{p.focus}</p>
                </div>
            ))}

        </div>
    )
}

export default PreparationPlan