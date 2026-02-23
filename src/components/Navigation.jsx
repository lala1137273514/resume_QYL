import React from 'react';
import { User, Layers, Monitor, Brain, Briefcase, Wrench } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab, isScrolled }) => {
    const navItems = [
        { id: 'profile', label: '首页简介', icon: User },
        { id: 'skills', label: '个人技能', icon: Wrench },
        { id: 'experience', label: '工作经历', icon: Briefcase },
        { id: 'projects', label: '项目经历', icon: Layers },
        { id: 'portfolio', label: '个人作品', icon: Monitor },
    ];

    return (
        <div className="transition-all duration-300">
            <nav className={`
        flex overflow-x-auto hide-scrollbar p-1.5 rounded-2xl transition-all duration-300
        ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border border-white/50' : 'bg-white/80 backdrop-blur-md shadow-sm border border-slate-100'}
      `}>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                // 移动端点击切换时，如果页面滑到底部，自动回滚一下体验更好
                                if (window.innerWidth < 1024) {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className={`
                flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-[14px] font-bold transition-all duration-300 whitespace-nowrap relative
                ${isActive
                                    ? 'text-blue-700 bg-white shadow-sm ring-1 ring-slate-900/5'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'}
              `}
                        >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Navigation;
