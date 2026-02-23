import React from 'react';
import { User, Brain, Mail, Phone, MapPin, Github, Linkedin, Download, MessageSquare, Briefcase, Navigation } from 'lucide-react';
import { profile } from '../data/profile';

const Sidebar = () => {
    return (
        <aside className="h-full relative z-10">
            <div className="h-full overflow-y-auto hide-scrollbar bg-white/70 backdrop-blur-2xl rounded-[2rem] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-white/60 ring-1 ring-slate-900/5">
                {/* 照片与姓名 */}
                <div className="flex flex-col items-center mb-6 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 mb-5 overflow-hidden border-4 border-white shadow-lg flex items-center justify-center relative group">
                        {profile.avatar ? (
                            <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover object-[center_15%] group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                            <User className="w-16 h-16 text-blue-300 group-hover:scale-110 transition-transform duration-500" />
                        )}
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">{profile.name}</h1>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] rounded-full shadow-sm mb-3">
                        <p className="bg-white/90 backdrop-blur-sm text-blue-700 font-bold px-5 py-1.5 rounded-full text-sm flex items-center gap-2">
                            <Brain className="w-4 h-4" /> {profile.title}
                        </p>
                    </div>
                    {/* 身份标签组 */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {profile.badges.map((badge, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-500 border border-slate-200 rounded-full text-[11px] font-medium">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 核心评价 */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                    <p className="text-slate-600 text-[12px] whitespace-nowrap overflow-hidden text-ellipsis leading-relaxed text-center font-medium bg-slate-50/80 px-2 py-3 rounded-2xl border border-slate-100/50" title={profile.tagline}>
                        {profile.tagline}
                    </p>
                </div>

                {/* 技能标签云 */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                        <div className="w-1.5 h-4 bg-blue-500 rounded-full mr-2"></div>
                        核心技能
                    </h3>
                    {/* 滚动弹幕圈 (Marquee) */}
                    <div className="relative w-full overflow-hidden mask-edges mt-4 mb-2 group flex flex-col gap-3 py-2">

                        {/* 第一行：AI Skills (向左滚动) */}
                        <div className="flex w-full overflow-hidden">
                            {[0, 1].map((copy) => (
                                <div key={`ai-row-${copy}`} className="flex shrink-0 gap-3 pr-3 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden={copy === 1}>
                                    {profile.skills.ai.map((skill, idx) => (
                                        <span key={`ai-${copy}-${idx}`} className="px-3 py-1.5 bg-white text-blue-600 border border-blue-100 rounded-full text-[12px] font-medium shadow-sm whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* 第二行：Product Skills (向右滚动) */}
                        <div className="flex w-full overflow-hidden">
                            {[0, 1].map((copy) => (
                                <div key={`prod-row-${copy}`} className="flex shrink-0 gap-3 pr-3 animate-marquee-reverse group-hover:[animation-play-state:paused]" aria-hidden={copy === 1}>
                                    {[...profile.skills.product, '🎯 业务与框架'].map((skill, idx) => (
                                        <span key={`prod-${copy}-${idx}`} className="px-3 py-1.5 bg-white text-slate-600 border border-slate-200 rounded-full text-[12px] font-medium shadow-sm whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* 第三行：工具流混编技能 (快速向左滚动) */}
                        <div className="flex w-full overflow-hidden">
                            {[0, 1].map((copy) => (
                                <div key={`tool-row-${copy}`} className="flex shrink-0 gap-3 pr-3 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '20s' }} aria-hidden={copy === 1}>
                                    {[...profile.skills.tools, ...profile.skills.tools].map((skill, idx) => (
                                        <span key={`mix-${copy}-${idx}`} className="px-3 py-1.5 bg-slate-50 text-indigo-600 border border-indigo-100 rounded-full text-[12px] font-medium shadow-sm whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* 荣誉奖项 */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                        <div className="w-1.5 h-4 bg-indigo-500 rounded-full mr-2"></div>
                        荣誉奖项
                    </h3>
                    <ul className="space-y-2">
                        {profile.honors.map((honor, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></div>
                                {honor}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 联系方式 */}
                <div className="space-y-3 mb-8 px-1">
                    {/* 求职意向 */}
                    <div className="flex items-center text-slate-600 text-[13px] group">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mr-3">
                            <Briefcase className="w-4 h-4 text-blue-500" />
                        </div>
                        <span className="font-semibold text-blue-700">求职意向: {profile.contact.jobIntent}</span>
                    </div>
                    {/* 期望城市 */}
                    <div className="flex items-center text-slate-600 text-[13px] group">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3">
                            <Navigation className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className="font-medium">期望城市: {profile.contact.preferredCities}</span>
                    </div>
                    {/* 邮箱 */}
                    <div className="flex items-center text-slate-600 text-[13px] hover:text-blue-600 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-all">
                            <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                        <span className="font-medium break-all">邮箱: {profile.contact.email}</span>
                    </div>
                    {/* 手机 */}
                    <div className="flex items-center text-slate-600 text-[13px] hover:text-blue-600 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-all">
                            <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                        <span className="font-medium">手机: {profile.contact.phone}</span>
                    </div>
                    {/* 微信 */}
                    <div className="flex items-center text-slate-600 text-[13px] hover:text-blue-600 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-all">
                            <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                        <span className="font-medium">微信: {profile.contact.wechat}</span>
                    </div>
                    {/* 所在地 */}
                    <div className="flex items-center text-slate-600 text-[13px]">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3">
                            <MapPin className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className="font-medium">所在城市: {profile.contact.location}</span>
                    </div>

                    <div className="flex gap-3 pt-4">
                        {profile.contact.github && (
                            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-slate-100 bg-[#24292F] hover:bg-[#1a1e22] py-2.5 rounded-xl transition-all shadow-md group">
                                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-semibold tracking-wide">GitHub</span>
                            </a>
                        )}
                        {profile.contact.linkedin && (
                            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-white bg-[#0A66C2] hover:bg-[#084e96] py-2.5 rounded-xl transition-all shadow-md group">
                                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-semibold tracking-wide">LinkedIn</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* 下载简历按钮 */}
                <a
                    href="/assets/resume.pdf"
                    download
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20 flex items-center justify-center gap-2 hover:-translate-y-1 mt-6"
                >
                    <Download className="w-4 h-4" />
                    下载 PDF 简历
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
