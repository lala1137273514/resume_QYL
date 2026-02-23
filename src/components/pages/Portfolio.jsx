import React, { useState } from 'react';
import { worksData } from '../../data/works';
import WorkModal from '../WorkModal';
import { ExternalLink, Share2 } from 'lucide-react';

const Portfolio = () => {
    const [selectedWork, setSelectedWork] = useState(null);
    const [activeFilter, setActiveFilter] = useState('全部');

    // Extract unique categories for filters
    const categories = ['全部', ...new Set(worksData.map(work => work.category))];

    const filteredWorks = worksData.filter(work => {
        if (activeFilter === '全部') return true;
        return work.category === activeFilter;
    });

    return (
        <div className="space-y-6 animate-slide-up flex flex-col h-full">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-slate-100 pb-4 gap-4 flex-shrink-0">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                    个人作品集
                </h2>

                {/* 筛选标签栏 */}
                <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 sm:pb-0">
                    {categories.map(filter => (
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
                {filteredWorks.map((work) => {
                    return (
                        <div
                            key={work.id}
                            onClick={() => setSelectedWork(work)}
                            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 hover:-translate-y-1 hover:border-indigo-200 transition-all cursor-pointer flex flex-col group relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4 z-10">
                                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg whitespace-nowrap border border-indigo-100/50">
                                    {work.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 z-10 group-hover:text-indigo-600 transition-colors leading-snug">{work.title}</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-grow z-10 leading-relaxed">
                                {work.shortDesc}
                            </p>

                            <div className="mt-auto z-10 pt-4 border-t border-slate-50 group-hover:border-indigo-50 transition-colors flex justify-between items-center gap-2">
                                <span className="text-xs font-bold text-indigo-600 flex items-center group-hover:translate-x-1 transition-transform whitespace-nowrap">
                                    文档详情 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                </span>

                                <div className="flex gap-2 flex-wrap justify-end">
                                    {/* 自定义预览链接 (Demo) */}
                                    {work.customLinks && work.customLinks.map((link, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(link.url, '_blank');
                                            }}
                                            className="text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 p-2 sm:px-3 sm:py-1.5 rounded-xl transition-all flex items-center gap-1.5 shadow-sm border border-indigo-100/50"
                                            title={link.label}
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            <span className="text-[11px] font-bold hidden 2xl:inline-block">{link.label}</span>
                                        </button>
                                    ))}

                                    {/* GitHub/分享链接 */}
                                    {work.githubLink && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(work.githubLink, '_blank');
                                            }}
                                            className="text-slate-500 hover:text-white bg-slate-50 hover:bg-slate-800 p-2 sm:px-3 sm:py-1.5 rounded-xl transition-all flex items-center gap-1.5 shadow-sm border border-slate-100"
                                            title="查看 GitHub"
                                        >
                                            <Share2 className="w-3.5 h-3.5" />
                                            <span className="text-[11px] font-bold hidden 2xl:inline-block">代码</span>
                                        </button>
                                    )}
                                </div>
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
