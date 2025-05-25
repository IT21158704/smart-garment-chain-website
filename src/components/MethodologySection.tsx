import { Cpu, Database, Users } from "lucide-react";
import { iconMap, methodologySteps } from "../data/data";

const MethodologySection = () => {
    return (
        <section id="methodology" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Research Methodology
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        Our comprehensive methodology combines advanced AI algorithms, machine learning models,
                        and data-driven approaches to optimize each component of the supply chain
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {methodologySteps.map((step, index) => {
                        const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                        return (
                            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105">
                                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="relative p-8">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {step.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300 border border-gray-600">
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

                <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
                    <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">System Architecture</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto">
                                <Database className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold text-white">Data Layer</h4>
                            <p className="text-sm text-gray-400">MongoDB, Firebase, Real-time APIs</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold text-white">AI Processing</h4>
                            <p className="text-sm text-gray-400">Cloud Functions, ML Models, Analytics</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto">
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