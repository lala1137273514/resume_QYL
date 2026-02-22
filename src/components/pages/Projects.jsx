import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectModal from '../ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="space-y-6 animate-slide-up">
            <div className="flex justify-between items-end border-b border-slate-100 pb-3">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                    核心项目实战
                </h2>
                <span className="text-xs text-slate-400 mb-1 hidden sm:inline-block">点击卡片查看详细成果</span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-200 transition-all cursor-pointer flex flex-col h-full group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1 pr-2">{project.title}</h3>
                            <span className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-[11px] font-bold rounded-md whitespace-nowrap ml-2 flex-shrink-0 border border-blue-100/50">
                                {project.role}
                            </span>
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
