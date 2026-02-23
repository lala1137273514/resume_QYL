import React from 'react';
import { Bot, LineChart, Code, CheckCircle2 } from 'lucide-react';

const Skills = () => {
    return (
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center mb-8">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                个人技能
            </h2>

            <div className="space-y-8">
                {/* AI 技能 */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Bot className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">AI 技能</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>LLM 能力评估与模型选型：</strong> 能够根据业务场景的 ROI、并发要求、算力成本，精准选取并评估适合的主流开源/闭源模型。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>LLM 评测体系与数据飞轮：</strong> 熟悉“数据采集 → Bad Case 归因 → LLM 自动评测 → 模型迭代”闭环，能根据业务构建高质量评测数据集。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>RAG 流程搭建与优化：</strong> 熟练掌握知识库的切片策略、Hybrid Search（向量+BM25）混合检索以及 Cross-Encoder 重排技术，有效应对幻觉并提升召回准确率。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>Agent 工作流设计与编排：</strong> 深谙 Dify 等底层平台的逻辑编排，能够将复杂的系统要求（例如防幻觉防护网、熔断机制等）抽象并设计成为稳定运行的 Agent 流。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>Prompt Engineering 设计调优：</strong> 擅长使用结构化 Prompt、Few-Shot、思维链（CoT）等进阶工程技巧进行提示词架构设计；熟知 Bad Case 驱动的迭代治理理念。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>Vibe Coding 敏捷落地：</strong> 习惯并将前沿 AI 开发工具（如 Claude Code / Cursor / Antigravity）完全融入日常，极高效率完成产品概念向前端演示原型（Demo）转换。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>AI 前沿技术追踪与体感：</strong> 作为 AI Native 玩家，长期高强度上手图像/视频生成大模型与各类架构框架，保持对 AI 边界的精准体感。</span>
                        </li>
                    </ul>
                </div>

                {/* 产品技能 */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <LineChart className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">产品技能</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>需求洞察与业务抽象：</strong> 具备过硬的业务感知嗅觉，能够将散乱的跨平台/渠道线索有效抽象并建立具有共性的数据模型底座（如 ETL 统一调度设计）。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>多团队协同与敏捷项目管理：</strong> 在高负荷环境下，牵动数十轮产研评审、掌握 Trade-off 的切割思维以及“大系统平滑过渡与降维重构”的分步规划能力。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>商业 ROI 验证模型构建：</strong> 拒绝无收益的功能堆陈。熟练根据 Token 消耗建立基于业务漏斗与转化时间缩减的正向商业财务验证模型（如 FVR 反向体感指标系统）。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>产品基本功：</strong> 精通常规基础型生产力工具链条：PRD 标准化撰写、Figma / 墨刀高水准原型交付以及清晰的需求排期流转把控。</span>
                        </li>
                    </ul>
                </div>

                {/* 语言与辅助技能 */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">综合与语言技能</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>外语沟通环境：</strong> 拥有 <strong>PTE 60</strong> 及 <strong>CET-6</strong> 的语言背书，在 Auland 时积累了全英文职场下主导推演复杂系统落地的沟通优势与跨文化协同经验。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>跨文化团队协作：</strong> 具备在马来西亚等海外职场环境独立推进业务进程的能力，能够在多文化语境下进行清晰准确的技术与业务反馈拉齐。</span>
                        </li>
                        <li className="flex items-start text-slate-600 leading-relaxed text-[15px]">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span><strong>理科底基与工程分析工具：</strong> Python（熟练使用进行数据清洗/API截流抽取等）、SQL（数仓报表检索）、Excel的高级处理（复杂交叉分析透视表）。</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
