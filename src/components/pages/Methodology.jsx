import React from 'react';
import { Brain, Bot, Database, LineChart } from 'lucide-react';

const Methodology = () => {
    return (
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-blue-600 w-1.5 h-6 rounded-full mr-3"></span>
                工作方法论
            </h2>

            <div className="space-y-8">
                {/* 核心竞争力详情 (比首页更展开) */}
                <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4">核心打法拆解</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl mr-4">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-800 text-lg">AI 应用落地：从 Demo 到生产级 Agent</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                不满足于简单的 Prompt 输出，注重构建包含输入鉴权、检索增强(RAG)、多步骤推理、状态机管理以及最终兜底策略的生产级 Agent。
                                熟练使用 Dify 等平台进行复杂工作流编排，具备处理长上下文、提取结构化数据的前沿技能。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl mr-4">
                                    <Brain className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-800 text-lg">知识库治理与效果闭环：RAG 进阶</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                深刻理解 "Garbage in, garbage out"。主导建立基于 Bad Case 分析的数据飞轮：收集线上真实失败案例 -&gt; 根因分析（文档缺失/格式化差/相似度异常） -&gt; 优化切片/引入重排/调整混合检索权重，持续提升召回与回答质量。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-purple-200 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl mr-4">
                                    <Database className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-800 text-lg">复杂系统与架构治理：ToB 的基石</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                在 SCRM 与内部效能平台项目中，积累了跨系统数据治理（ETL）、领域模型抽象与系统重构经验。能够输出严谨的字段级映射方案与过渡期回滚预案，并在多团队协作中找到架构设计的 Trade-off 平衡点。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 理念与工具链 */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 opacity-5">
                        <Brain className="w-64 h-64" />
                    </div>

                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                        <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                        工具链与效能理念
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <h4 className="font-semibold text-blue-300 mb-3 uppercase tracking-wider text-sm">Vibe Coding 极客范式</h4>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                将先进工具整合进工作流。产品设计不止步于墨刀原型，直接基于代码库或使用 Cursor/Claude 快速生成交互式前端 Demo（如本网站），极大加速需求验证。
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-300 mb-3 uppercase tracking-wider text-sm">ROI 业务思维</h4>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                每一项技术投入必须算得清商业账。建立基于 Token 消耗、交互耗时缩减与转化率提升的 ROI 测算模型，以商业毛利验证功能设计的合理性。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Methodology;
