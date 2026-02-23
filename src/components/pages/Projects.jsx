import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectModal from '../ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('全部');

    const filters = ['全部', 'Agent 应用', 'RAG 知识库', 'B端与商业化'];

    const filteredProjects = projectsData.filter(project => {
        if (activeFilter === '全部') return true;

        const searchStr = (project.title + ' ' + (project.shortDesc || '') + ' ' + (project.techStack?.join(' ') || '')).toLowerCase();

        if (activeFilter === 'Agent 应用') {
            return searchStr.includes('agent') || searchStr.includes('dify') || searchStr.includes('工作流') || searchStr.includes('对话');
        }
        if (activeFilter === 'RAG 知识库') {
            return searchStr.includes('rag') || searchStr.includes('知识库') || searchStr.includes('召回');
        }
        if (activeFilter === 'B端与商业化') {
            return searchStr.includes('中台') || searchStr.includes('商业化') || searchStr.includes('b端') || searchStr.includes('scrm') || searchStr.includes('获客') || searchStr.includes('管线');
        }
        return true;
    });

    return (
        <div className="space-y-6 animate-slide-up flex flex-col h-full">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-slate-100 pb-4 gap-4 flex-shrink-0">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                    核心项目经历
                </h2>

                {/* 筛选标签栏 */}
                <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 sm:pb-0">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${activeFilter === filter
                                ? 'bg-slate-800 text-white shadow-md'
                                : 'bg-slate-50 text-slate-500 hover:bg-slate-200'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 flex-1 overflow-y-auto hide-scrollbar pr-1 pb-4 content-start items-stretch">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-200 transition-all cursor-pointer flex flex-col group relative overflow-hidden h-full"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-start mb-1 gap-2">
                            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">{project.title}</h3>
                            <span className="px-2.5 py-1 mt-0.5 bg-blue-50/80 text-blue-700 text-[11px] font-bold rounded-md whitespace-nowrap flex-shrink-0 border border-blue-100/50">
                                {project.role}
                            </span>
                        </div>
                        <div className="text-[12px] text-slate-400 font-medium mb-3 flex items-center">
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {project.period}
                        </div>
                        <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-3 leading-relaxed">
                            {project.shortDesc}
                        </p>
                        <div className="mt-auto pt-4 border-t border-slate-50">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.slice(0, 4).map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-600 text-[11px] rounded-md font-medium border border-slate-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;
