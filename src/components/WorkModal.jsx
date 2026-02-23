import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, FileText, Github, ExternalLink } from 'lucide-react';

const WorkModal = ({ work, onClose }) => {
    // Add effect to prevent body scroll when modal is open
    useEffect(() => {
        if (work) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [work]);

    if (!work) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-900/50"
                onClick={onClose}
            ></div>

            <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] relative shadow-2xl z-10 border border-slate-100 flex flex-col overflow-hidden animate-slide-up">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-slate-100/80 hover:bg-red-50 hover:text-red-500 text-slate-500 rounded-full transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto w-full p-8 md:p-12 hide-scrollbar">
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
                    {(work.githubLink || (work.customLinks && work.customLinks.length > 0)) && (
                        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-100 mt-auto">
                            {work.customLinks && work.customLinks.map((link, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => window.open(link.url, '_blank')}
                                    className="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    {link.label}
                                </button>
                            ))}

                            {work.githubLink && (
                                <button
                                    onClick={() => window.open(work.githubLink, '_blank')}
                                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 w-full sm:w-auto mt-3 sm:mt-0"
                                >
                                    <Github className="w-5 h-5" />
                                    在 GitHub 上查看
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default WorkModal;
