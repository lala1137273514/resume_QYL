import React from 'react';
import { Bot, Brain, Database, LineChart, ChevronRight, Calendar, GraduationCap, Layers, Sparkles, Activity } from 'lucide-react';

const Profile = () => {
    return (
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                关于我
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-[15px]">
                <p>
                    具备研发背景（马来亚大学·软件工程硕士）的 <strong>AI Native 产品经理</strong>。曾在全英文工作环境（马来西亚）及国内 AI 企业（快商通）中，独立主导及深度参与 <strong>7 个 AI 商业化与效能项目</strong>的全流程落地，覆盖从 0-1 需求定义、大模型技术选型，到产品上线迭代的完整链路。
                </p>
                <p>
                    作为重度 AI 工具玩家，持续追踪并深度体验前沿 AI 技术——从图像生成、视频生成到各类 AI 架构与工具，保持对行业最新动态的敏锐感知。擅长运用 <strong>Vibe Coding</strong>（Claude Code / Cursor / Antigravity）快速将产品构想转化为可运行的 Demo，有效压缩沟通成本与试错周期。
                </p>
                <p>
                    产品理念上，坚信成熟的 AI 产品需要完整的<strong>数据飞轮</strong>——而其中最关键、也最容易被忽视的一环，是<strong>评测体系的建设</strong>。这不是简单的打分或测试，而是一套从数据采集、Bad Case 发现、到模型迭代优化的闭环机制。只有将评测做到位，产品才能真正实现持续进化。
                </p>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mt-10 mb-5 flex items-center">
                <span className="bg-indigo-500 w-1.5 h-5 rounded-full mr-3"></span>
                核心竞争力
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { icon: Sparkles, title: 'AI Native 前沿玩家', desc: '持续追踪并深度体验前沿 AI 技术生态：从图像生成、视频生成到各类 AI 架构与工具，始终保持第一手的技术体感。对模型能力边界的判断，来自大量真实上手实践。' },
                    { icon: Bot, title: 'Agent / RAG 工作流落地', desc: '熟悉 Agent 工作流编排（Dify）与 RAG 知识库治理（向量/混合检索）。完成从 B2B 获客 Agent 到企业内部效能助手的完整产品化实践，具备 Prompt Engineering 与工作流调优经验。' },
                    { icon: Activity, title: 'LLM 评测与 Bad Case 治理', desc: '主导搭建"数据采集 → Bad Case 归因 → LLM 自动评测 → 模型迭代"的完整闭环体系。能够设计评测指标、构建评测数据集，并将评测结果转化为可执行的优化方案。' },
                    { icon: LineChart, title: '商业思维与 ROI 驱动', desc: '目标导向型产品经理，擅长运用 Python / SQL / Excel 进行数据分析与商业 ROI 模型测算。将技术指标有效转化为客户可感知的商业价值。' }
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
