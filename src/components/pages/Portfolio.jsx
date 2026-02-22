import React, { useState } from 'react';
import { worksData } from '../../data/works';
import WorkModal from '../WorkModal';
import { ExternalLink, Share2 } from 'lucide-react';

const Portfolio = () => {
    const [selectedWork, setSelectedWork] = useState(null);

    return (
        <div className="space-y-6 animate-slide-up">
            <div className="flex justify-between items-end border-b border-slate-100 pb-3">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                    个人作品集
                </h2>
                <span className="text-xs text-slate-400 mb-1">文档 / 原型 / 源码</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {worksData.map((work) => {
                    return (
                        <div
                            key={work.id}
                            onClick={() => setSelectedWork(work)}
                            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 hover:-translate-y-1 hover:border-indigo-200 transition-all cursor-pointer flex flex-col h-full group relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-4 z-10">
                                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg whitespace-nowrap border border-indigo-100/50">
                                    {work.category}
                                </span>
                                {work.githubLink && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(work.githubLink, '_blank');
                                        }}
                                        className="text-slate-400 hover:text-white bg-slate-50 hover:bg-slate-800 p-2 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                                        title="查看 GitHub"
                                    >
                                        <Share2 className="w-3.5 h-3.5" />
                                        <span className="text-[11px] font-bold hidden sm:inline-block">分享</span>
                                    </button>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 z-10 group-hover:text-indigo-600 transition-colors">{work.title}</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-grow z-10 leading-relaxed">
                                {work.shortDesc}
                            </p>

                            <div className="mt-auto z-10 pt-4 border-t border-slate-50 group-hover:border-indigo-50 transition-colors">
                                <span className="text-xs font-bold text-indigo-600 flex items-center group-hover:translate-x-1 transition-transform">
                                    查看详情与文档 <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        </div>
    );
};

export default Portfolio;
