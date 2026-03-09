import { Target, Lightbulb, BarChart3 } from "lucide-react";

const FeatureCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="flex gap-4">
                <Target className="w-6 h-6 text-pink-600" />
                <div>
                    <h4 className="font-bold text-white">Tailor for keywords</h4>
                    <p className="text-sm text-gray-400">
                        Get AI recommendations.
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <Lightbulb className="w-6 h-6 text-pink-600" />
                <div>
                    <h4 className="font-bold text-white">AI Improvements</h4>
                    <p className="text-sm text-gray-400">
                        Improve your resume.
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <BarChart3 className="w-6 h-6 text-pink-600" />
                <div>
                    <h4 className="font-bold text-white">Score Guarantee</h4>
                    <p className="text-sm text-gray-400">
                        Understand why your resume matches.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FeatureCards;