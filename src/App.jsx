import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Profile from './components/pages/Profile';
import Projects from './components/pages/Projects';
import Portfolio from './components/pages/Portfolio';
import Methodology from './components/pages/Methodology';

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
            case 'projects':
                return <Projects />;
            case 'portfolio':
                return <Portfolio />;
            case 'methodology':
                return <Methodology />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-slate-50 to-[#f8fafc] font-sans p-4 md:p-8 xl:p-12 text-slate-800 selection:bg-blue-200 selection:text-blue-900">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8">

                {/* ================= 左侧：个人信息栏 ================= */}
                <Sidebar className="w-full lg:w-1/3 xl:w-[28%] relative z-10" />

                {/* ================= 右侧：内容区与导航 ================= */}
                <main className="w-full lg:w-2/3 xl:w-[72%] flex flex-col gap-6 relative">

                    {/* 顶部导航 Tabs (移动端吸顶优化) */}
                    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />

                    {/* 核心内容展示区 */}
                    <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 shadow-sm border border-white/50 ring-1 ring-slate-900/5 min-h-[600px] mb-10 lg:mb-0">
                        {renderContent()}
                    </div>

                </main>
            </div>
        </div>
    );
};

export default App;
