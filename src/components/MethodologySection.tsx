import { Cpu, Database, Users } from "lucide-react";
import { iconMap, methodologySteps } from "../data/data";

const MethodologySection = () => {
    return (
        <section id="methodology" className="py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                        Research Methodology
                    </h2>
                    <p className="max-w-4xl mx-auto text-xl text-gray-300">
                        Our comprehensive methodology combines advanced AI algorithms, machine learning models,
                        and data-driven approaches to optimize each component of the supply chain
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {methodologySteps.map((step, index) => {
                        const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                        return (
                            <div key={index} className="relative overflow-hidden transition-all duration-300 border border-gray-600 group rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:border-gray-500 hover:scale-105">
                                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="relative p-8">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                                        {step.title}
                                    </h3>
                                    <p className="mb-6 leading-relaxed text-gray-300">
                                        {step.description}
                                    </p>
                                    <div className="space-y-2">
                                        <h4 className="mb-3 text-sm font-semibold text-blue-400">Key Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {step.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 text-xs text-gray-300 bg-gray-700 border border-gray-600 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="p-8 mt-16 border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl">
                    <h3 className="mb-6 text-2xl font-bold text-center text-blue-400">System Architecture</h3>
                    <div className="grid gap-6 text-center md:grid-cols-3">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                                <Database className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold text-white">Data Layer</h4>
                            <p className="text-sm text-gray-400">MongoDB, Firebase, Real-time APIs</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold text-white">AI Processing</h4>
                            <p className="text-sm text-gray-400">Cloud Functions, ML Models, Analytics</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold text-white">User Interface</h4>
                            <p className="text-sm text-gray-400">React Native, Next.js, Web Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;