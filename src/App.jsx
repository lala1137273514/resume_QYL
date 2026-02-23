import React, { useState, useEffect } from 'react';
import { Phone, Mail, Download, ChevronDown } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Profile from './components/pages/Profile';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';

const App = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isScrolled, setIsScrolled] = useState(false);

    // 监听滚动，用于优化吸顶导航栏的阴影效果
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <Profile />;
            case 'experience':
                return <Experience />;
            case 'projects':
                return <Projects />;
            case 'portfolio':
                return <Portfolio />;
            case 'skills':
                return <Skills />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className="min-h-screen lg:h-screen lg:overflow-hidden overflow-x-hidden bg-slate-50 font-sans p-4 md:p-6 xl:p-8 text-slate-800 selection:bg-blue-200 selection:text-blue-900 relative">
            {/* 动态光晕背景 (Glassmorphism Blobs) */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob"></div>
                <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-sky-300/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[50rem] h-[50rem] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-4000"></div>
            </div>

            <div className="lg:h-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 pb-16 lg:pb-0 relative z-10">

                {/* ================= 左侧：个人信息栏 ================= */}
                <div className="w-full lg:w-1/3 xl:w-[28%] lg:h-full flex-shrink-0">
                    <Sidebar />
                </div>

                {/* ================= 右侧：内容区与导航 ================= */}
                <main className="flex-1 flex flex-col min-w-0 relative lg:h-full">

                    {/* 顶部导航 Tabs (移动端Sticky悬浮) */}
                    <div id="resume-nav-bar" className="flex-shrink-0 mb-4 z-50 sticky top-4 lg:static lg:top-auto">
                        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />
                    </div>

                    {/* 核心内容展示区 - 可滚动 */}
                    <div className="flex-1 lg:overflow-y-auto hide-scrollbar bg-white/70 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 xl:p-10 shadow-sm border border-white/60 ring-1 ring-slate-900/5">
                        {renderContent()}
                    </div>

                </main>
            </div>

            {/* 移动端专属下滑引导浮窗 - 仅在未滚动时显示，滚动后渐变消失 */}
            <div className={`
                fixed bottom-24 left-1/2 -translate-x-1/2 z-40 lg:hidden transition-all duration-700 pointer-events-none
                ${isScrolled ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0 text-blue-500'}
            `}>
                <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 px-3 py-2 rounded-full animate-bounce">
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                </div>
            </div>

            {/* ================= 移动端悬浮 CTA ================= */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 pb-6 sm:pb-4 z-[90] flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-3">
                    <a href="tel:15655249123" className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center active:scale-95 transition-transform" aria-label="拨打电话">
                        <Phone className="w-5 h-5" />
                    </a>
                    <a href="mailto:qinyulong1137273514@gmail.com" className="w-11 h-11 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center active:scale-95 transition-transform" aria-label="发送邮件">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
                <a href="/assets/resume.pdf" download className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-slate-900/20 active:scale-95 transition-transform flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    获取完整简历
                </a>
            </div>
        </div>
    );
};

export default App;
