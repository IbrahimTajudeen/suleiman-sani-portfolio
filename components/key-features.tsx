import { Award, Heart, Coffee, UserIcon } from "lucide-react";



export default function KeyFeatures() {
    return (
        <div className="grid md:grid-cols-4 gap-5 items-center px-10 pb-5 w-full mx-auto  bg-gray-50">
            <div className="border mx-4 border-[#e5e7eb] rounded-2xl p-6 text-center bg-white">
                <UserIcon className="mx-auto mb-4 text-black p-5 rounded-full bg-[#e4efff]" size={64} />
                <h4 className="font-semibold text-lg mb-2">1 Year Experience</h4>
                <p className="text-gray-600 text-[18px]">Designing user experiences</p>
            </div>

            <div className="border mx-4 border-[#e5e7eb] rounded-2xl p-6 text-center bg-white">
                <Award className="mx-auto mb-4 text-black p-5 rounded-full bg-[#e4efff]" size={64} />
                <h4 className="font-semibold text-lg mb-2">User-Centered Design</h4>
                <p className="text-gray-600 text-[18px]">Research-driven solutions</p>
            </div>

            <div className="border mx-4 border-[#e5e7eb] rounded-2xl p-6 text-center bg-white">
                <Coffee className="mx-auto mb-4 text-black p-5 rounded-full bg-[#e4efff]" size={64} />
                <h4 className="font-semibold text-lg mb-2">Problem Solver</h4>
                <p className="text-gray-600 text-[18px]">Bridging user needs & business goals</p>
            </div>

            <div className="border mx-4 border-[#e5e7eb] rounded-2xl p-6 text-center bg-white">
                <Heart className="mx-auto mb-4 text-black p-5 rounded-full bg-[#e4efff]" size={64} />
                <h4 className="font-semibold text-lg mb-2">Passionate Designer</h4>
                <p className="text-gray-600 text-[18px]">Beautiful, functional & accessible</p>
            </div>

        </div>
    );
}