import React from 'react';
import { Bot, Brain, Database, LineChart, ChevronRight, Calendar, GraduationCap, Layers } from 'lucide-react';

const Profile = () => {
    return (
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                关于我
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-[15px]">
                <p>
                    您好！我是一名专注于 <strong>ToB AI 产品方向</strong>的产品经理（马来亚大学软件工程硕士）。具备从需求定义、技术选型到上线迭代的完整实战经验。
                    我的核心优势是<strong>“业务目标驱动 × AI 技术落地 × 数据闭环优化”</strong>，在架构演进与前沿 AI 应用的结合上有着深刻理解。
                </p>
                <p>
                    我曾在全英文工作环境及国内领先企业中，主导/深度参与了多个 AI 商业化与中台效能项目的 0-1 落地。我不仅关注产品体验，更兼具<strong>工程边界意识</strong>，擅长处理复杂系统的 Trade-off 决策、搭建可复用的数据闭环机制，并乐于重度使用 Vibe Coding 工具（如 Claude/Cursor）以提升产品迭代效率。
                </p>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mt-10 mb-5 flex items-center">
                <span className="bg-indigo-500 w-1.5 h-5 rounded-full mr-3"></span>
                核心竞争力
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { icon: Bot, title: 'AI 应用与工作流落地', desc: '深谙 AIGC 应用设计与 Agent 工作流编排（如 Dify）。具备大模型选型能力，主导过从 B2B 获客 Agent 到效能助手的完整产品化过程。' },
                    { icon: Brain, title: '知识库与模型评测', desc: '熟练掌握 RAG 知识库治理（向量/Hybrid Search）。擅长搭建“数据产生 → Bad Case 闭环 → LLM 自动评测”的迭代体系。' },
                    { icon: Database, title: 'ToB 架构与数据治理', desc: '具备 B 端 SaaS 与复杂架构演进实践。能够完成跨系统（如 CRM/企微）需求抽象，处理权限边界、数据清洗与集成落地。' },
                    { icon: LineChart, title: '商业思维与数据驱动', desc: '目标导向，善于利用 Python/Excel 进行数据分析与业务 ROI 模型测算。能将技术指标有效转化为商业客户价值。' }
                ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                        <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-3">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mr-3">
                                    <ItemIcon className="w-5 h-5 text-blue-600 group-hover:text-white" />
                                </div>
                                <h4 className="font-bold text-slate-800">{item.title}</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    )
                })}
            </div>

            <h3 className="text-xl font-bold text-slate-800 mt-12 mb-5 flex items-center">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                工作经历
            </h3>
            <div className="pl-2 pt-4">
                {/* 工作经历 1 */}
                <div className="relative pl-8 pb-10 border-l-2 border-slate-200 group">
                    <div className="absolute w-5 h-5 bg-white rounded-full -left-[11px] top-1 border-[5px] border-blue-500 group-hover:scale-125 transition-transform shadow-sm"></div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 -mt-1.5">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">快商通</h3>
                            <p className="text-blue-600 font-semibold mt-1">AI 产品经理（实习）</p>
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
                </div>

                {/* 工作经历 2 */}
                <div className="relative pl-8 border-l-2 border-transparent group">
                    <div className="absolute w-5 h-5 bg-white rounded-full -left-[11px] top-1 border-[5px] border-slate-300 group-hover:border-blue-400 group-hover:scale-125 transition-all shadow-sm"></div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 -mt-1.5">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Auland Education SDN BHD (马来西亚)</h3>
                            <p className="text-slate-600 font-semibold mt-1">AI 产品经理（实习）</p>
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
                </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center mt-12 mb-5">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                教育背景
            </h3>
            <div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white flex flex-col sm:flex-row justify-between sm:items-center gap-6 relative overflow-hidden shadow-lg shadow-blue-900/20">
                    <div className="absolute right-0 top-0 opacity-10 rotate-12">
                        <GraduationCap className="w-48 h-48" />
                    </div>
                    <div className="z-10">
                        <h4 className="text-2xl font-bold flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 opacity-80" />
                            马来亚大学
                        </h4>
                        <p className="text-blue-100 mt-2 font-medium ml-11 text-lg">University of Malaya (QS 58)</p>
                        <p className="text-white font-bold ml-11 mt-1">软件工程 · 硕士</p>
                    </div>
                    <div className="text-left sm:text-right z-10">
                        <span className="text-sm text-blue-900 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl inline-block font-bold shadow-sm">
                            计算机核心专业背景
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-6 mb-10">
                <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-8 rounded-3xl text-white flex flex-col sm:flex-row justify-between sm:items-center gap-6 relative overflow-hidden shadow-lg shadow-slate-900/20">
                    <div className="absolute right-0 top-0 opacity-10 rotate-12">
                        <GraduationCap className="w-48 h-48" />
                    </div>
                    <div className="z-10">
                        <h4 className="text-2xl font-bold flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 opacity-80" />
                            天津财经大学（珠江学院）
                        </h4>
                        <p className="text-white font-bold ml-11 mt-1">物联网工程 · 学士</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
