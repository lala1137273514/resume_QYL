import React from 'react';
import { X, FileText, Github } from 'lucide-react';

const WorkModal = ({ work, onClose }) => {
    if (!work) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-slide-up">
            <div
                className="absolute inset-0 bg-slate-900/30 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl z-10 border border-white">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 rounded-full transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                    <div className="flex flex-col mb-8 border-b border-slate-100 pb-8">
                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-bold w-fit mb-4">
                            {work.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight pr-10">
                            {work.title}
                        </h2>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg mr-3">
                                <FileText className="w-4 h-4" />
                            </div>
                            内容详情
                        </h3>
                        <p className="text-slate-600 leading-relaxed bg-slate-50/80 p-6 rounded-2xl border border-slate-100/50 text-[15px]">
                            {work.details}
                        </p>
                    </div>

                    {work.screenshots && work.screenshots.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                截图画廊
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {work.screenshots.map((img, idx) => (
                                    <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="rounded-xl border border-slate-200 shadow-sm w-full" />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 弹窗内的跳转动作区 */}
                    {work.githubLink && (
                        <div className="flex justify-end pt-6 border-t border-slate-100">
                            <button
                                onClick={() => window.open(work.githubLink, '_blank')}
                                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-slate-900/20 flex items-center gap-2 hover:-translate-y-1 w-full sm:w-auto justify-center"
                            >
                                <Github className="w-5 h-5" />
                                在 GitHub 上查看完整内容
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkModal;
