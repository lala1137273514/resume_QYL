import React from 'react';
import { User, Brain, Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { profile } from '../data/profile';

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-1/3 xl:w-[28%] relative z-10">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow sticky top-8 border border-white/50 ring-1 ring-slate-900/5">
                {/* 照片与姓名 */}
                <div className="flex flex-col items-center mb-6 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 mb-5 overflow-hidden border-4 border-white shadow-lg flex items-center justify-center relative group">
                        {profile.avatar ? (
                            <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                            <User className="w-16 h-16 text-blue-300 group-hover:scale-110 transition-transform duration-500" />
                        )}
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">{profile.name}</h1>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] rounded-full shadow-sm">
                        <p className="bg-white/90 backdrop-blur-sm text-blue-700 font-bold px-5 py-1.5 rounded-full text-sm flex items-center gap-2">
                            <Brain className="w-4 h-4" /> {profile.title}
                        </p>
                    </div>
                </div>

                {/* 核心评价 */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                    <p className="text-slate-600 text-[13px] leading-relaxed text-center font-medium bg-slate-50/80 p-4 rounded-2xl border border-slate-100/50">
                        {profile.tagline}
                    </p>
                </div>

                {/* 关键数字 */}
                <div className="flex justify-between gap-2 mb-6 pb-6 border-b border-slate-100">
                    {profile.stats.map((stat, idx) => (
                        <div key={idx} className="flex-1 bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                            <div className="text-blue-600 font-bold text-lg mb-1">{stat.value}</div>
                            <div className="text-slate-500 text-[11px] font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* 技能标签云 */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                        <div className="w-1.5 h-4 bg-blue-500 rounded-full mr-2"></div>
                        核心技能
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-[11px] text-slate-400 font-bold mb-2 uppercase tracking-wide">AI Skills</p>
                            <div className="flex flex-wrap gap-1.5">
                                {profile.skills.ai.map((skill, idx) => (
                                    <span key={idx} className="px-2.5 py-1 bg-blue-50/50 text-blue-700 border border-blue-100 rounded-lg text-xs font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[11px] text-slate-400 font-bold mb-2 uppercase tracking-wide">Product Skills</p>
                            <div className="flex flex-wrap gap-1.5">
                                {profile.skills.product.map((skill, idx) => (
                                    <span key={idx} className="px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-xs font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[11px] text-slate-400 font-bold mb-2 uppercase tracking-wide">Language</p>
                            <span className="px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-100 rounded-lg text-xs font-medium inline-block">
                                {profile.skills.language}
                            </span>
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
                    <div className="flex items-center text-slate-600 text-sm hover:text-blue-600 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-all">
                            <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                        <span className="font-medium text-xs break-all">{profile.contact.email}</span>
                    </div>
                    <div className="flex items-center text-slate-600 text-sm hover:text-blue-600 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-all">
                            <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                        <span className="font-medium text-xs">{profile.contact.phone}</span>
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center mr-3">
                            <MapPin className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className="font-medium text-xs">{profile.contact.location}</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                        {profile.contact.github && (
                            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-slate-600 hover:text-white bg-slate-50 hover:bg-slate-800 p-2 rounded-xl transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {profile.contact.linkedin && (
                            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-slate-600 hover:text-white bg-slate-50 hover:bg-blue-600 p-2 rounded-xl transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* 下载简历按钮 */}
                <a
                    href="/assets/resume.pdf"
                    download
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                    <Download className="w-4 h-4" />
                    下载 PDF 简历
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
