import React from 'react';
import { Calendar, ChevronRight, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                工作经历
            </h2>

            <div className="pl-2 pt-4">
                {/* 工作经历 1 */}
                <div className="relative pl-8 pb-10 border-l-2 border-slate-200 group">
                    <div className="absolute w-5 h-5 bg-white rounded-full -left-[11px] top-1 border-[5px] border-blue-500 group-hover:scale-125 transition-transform shadow-sm"></div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 -mt-1.5">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">快商通</h3>
                            <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[12px] font-bold rounded-lg border border-blue-100">AI 产品经理（实习）</span>
                        </div>
                        <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-full flex items-center mt-3 xl:mt-0 w-fit">
                            <Calendar className="w-4 h-4 mr-1.5" />
                            2025.11 - 2026.02
                        </span>
                    </div>

                    <ul className="list-none space-y-3 text-[15px] text-slate-600 mt-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>独立主导/深度参与 <strong>6 个 AI 商业化项目</strong>全流程落地，覆盖 B2B 获客 Agent、内部效能平台、商业化应用等方向。</span>
                        </li>
                        <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>具备大模型选型、RAG 知识库治理、Dify 工作流编排与商业 ROI 测算能力，能完成从需求到上线的完整推进。</span>
                        </li>
                        <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>在多个项目中搭建<strong>“数据产生 → Bad Case 闭环 → LLM 自动评测”</strong>的迭代机制，相关 SOP 已被跨业务线成功复用。</span>
                        </li>
                    </ul>

                    {/* 项目经历标签映射 */}
                    <div className="mt-5 relative">
                        <div className="flex items-center gap-2 mb-3">
                            <Briefcase className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-bold text-slate-500">关联项目实战：</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {['百度健康医生 IP', 'CEO 大模型', '千锤 Agent 平台', '拓客见鱼 SCRM', '销冠话术宝', '练吧 AI 陪练'].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[13px] rounded-lg font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 工作经历 2 */}
                <div className="relative pl-8 border-l-2 border-transparent group">
                    <div className="absolute w-5 h-5 bg-white rounded-full -left-[11px] top-1 border-[5px] border-slate-300 group-hover:border-blue-400 group-hover:scale-125 transition-all shadow-sm"></div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 -mt-1.5">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Auland Education SDN BHD (马来西亚)</h3>
                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg border border-slate-200">AI 产品经理（实习）</span>
                        </div>
                        <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-full flex items-center mt-3 xl:mt-0 w-fit">
                            <Calendar className="w-4 h-4 mr-1.5" />
                            2024.12 - 2025.09
                        </span>
                    </div>

                    <ul className="list-none space-y-3 text-[15px] text-slate-600 mt-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                        <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>在全英语工作环境下，主导 Edu-Bot (海外官网智能客服) 从 0 到 1 的产品设计与知识库治理。</span>
                        </li>
                        <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>产品上线后实现 <strong>RAG 召回率 85%+、自助解决率 25-35%、高风险意图识别准确率 95%+</strong> 的优异表现。</span>
                        </li>
                        <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>使用 Python/Excel 构建数据分析流程，并建立 ROI 评估模型，有效支持了内容策略与预算分配优化。</span>
                        </li>
                    </ul>

                    {/* 项目经历标签映射 */}
                    <div className="mt-5 relative">
                        <div className="flex items-center gap-2 mb-3">
                            <Briefcase className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-bold text-slate-500">关联项目实战：</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {['Edu-Bot 海外智能客服'].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[13px] rounded-lg font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
