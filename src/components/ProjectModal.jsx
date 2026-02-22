import React from 'react';
import { X, User, Database, LineChart, Layers, Check } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-slide-up">
            <div
                className="absolute inset-0 bg-slate-900/30 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl z-10 border border-white">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-5 pr-10 leading-tight">
                        {project.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-slate-100 pb-6">
                        <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-lg text-sm font-bold flex items-center border border-blue-100">
                            <User className="w-4 h-4 mr-2" />
                            角色：{project.role}
                        </span>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg mr-3">
                                <Database className="w-4 h-4" />
                            </div>
                            🎯 Situation / 背景与场景
                        </h3>
                        <p className="text-slate-600 leading-relaxed bg-slate-50/80 p-6 rounded-2xl border border-slate-100/50 text-[15px]">
                            {project.situation}
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg mr-3">
                                <Layers className="w-4 h-4" />
                            </div>
                            📋 Task / 职责与目标
                        </h3>
                        <p className="text-slate-600 leading-relaxed bg-slate-50/80 p-6 rounded-2xl border border-slate-100/50 text-[15px]">
                            {project.task}
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg mr-3">
                                <Brain className="w-4 h-4" />
                            </div>
                            ⚡ Action / 关键动作
                        </h3>
                        <ul className="list-none space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            {project.action.map((act, index) => (
                                <li key={index} className="flex items-start text-slate-700 font-medium leading-relaxed">
                                    <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold">{index + 1}</span>
                                    </div>
                                    <span className="text-[15px] pt-0.5">{act}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg mr-3">
                                <LineChart className="w-4 h-4" />
                            </div>
                            📊 Result / 业务成果
                        </h3>
                        <ul className="list-none space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            {project.result.map((res, index) => (
                                <li key={index} className="flex items-start text-slate-700 font-medium leading-relaxed">
                                    <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-[15px] pt-0.5">{res}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <div className="p-1.5 bg-slate-100 text-slate-600 rounded-lg mr-3">
                                <Layers className="w-4 h-4" />
                            </div>
                            技术标签
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200/60 text-slate-600 text-[13px] rounded-xl font-bold shadow-sm hover:border-slate-300 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
