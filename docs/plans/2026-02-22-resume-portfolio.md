# Resume Portfolio 实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 基于已有 React 源码，搭建秦宇龙的个人简历/作品集网站，4 页 Tab 切换 + 左侧固定信息栏 + STAR 结构项目详情。

**Architecture:** Vite + React SPA，左右分栏布局。左侧固定 Sidebar（个人画像 + 技能 + 联系方式），右侧 4 个 Tab 页（Profile / Projects / Portfolio / Methodology）。所有数据抽取为独立 JS 配置文件，组件拆分为 8+ 个独立模块。

**Tech Stack:** Vite, React 18, Tailwind CSS 3, lucide-react, PostCSS/Autoprefixer

---

## Task 1: 项目初始化

**Files:**
- Create: `resume-portfolio/package.json`（由 Vite 脚手架生成）
- Create: `resume-portfolio/vite.config.js`
- Create: `resume-portfolio/tailwind.config.js`
- Create: `resume-portfolio/postcss.config.js`
- Create: `resume-portfolio/src/index.css`
- Create: `resume-portfolio/src/main.jsx`

**Step 1:** 在 `resume-portfolio/` 目录下初始化 Vite + React 项目

```bash
cd c:\Users\11372\Desktop\工作\简历内容\简历\resume-portfolio
npx -y create-vite@latest ./ -- --template react
```

**Step 2:** 安装依赖

```bash
npm install
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
npm install lucide-react
```

**Step 3:** 配置 Tailwind CSS

`postcss.config.js`:
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Step 4:** 配置 `src/index.css`

```css
@import "tailwindcss";

@keyframes slideUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
```

**Step 5:** 运行验证

```bash
npm run dev
```
Expected: 浏览器打开 localhost:5173，显示默认 Vite + React 页面。

---

## Task 2: 数据层 — 抽取所有配置数据

**Files:**
- Create: `src/data/profile.js`
- Create: `src/data/projects.js`
- Create: `src/data/works.js`

**Step 1:** 创建 `src/data/profile.js` — 个人信息配置

```js
export const profile = {
  name: '秦宇龙',
  title: 'AI 产品经理',
  tagline: '"业务目标驱动 × AI技术落地 × 数据闭环优化"',
  avatar: null, // 后续替换为真实照片路径
  contact: {
    email: 'qinyulong1137273514@gmail.com',
    phone: '15655249123',
    location: '四川省·成都市',
    github: '', // 待填
    linkedin: '', // 待填
  },
  stats: [
    { label: 'AI 项目', value: '7+' },
    { label: '实习经历', value: '2 段' },
    { label: 'Agent 上线', value: '10+' },
  ],
  skills: {
    ai: ['LLM 能力评估与模型选型', 'RAG 流程搭建与优化', 'Agent 工作流设计与编排', 'Prompt Engineering', 'LLM 评测与 Bad Case 治理', 'Vibe Coding'],
    product: ['PRD 撰写', 'Figma / 墨刀', 'Python / SQL / Excel', '需求优先级划分'],
    language: 'CET-6 | PTE 60',
  },
  honors: ['2023 年金边荣誉学位', '优秀学生干部', '优秀毕业生'],
};
```

**Step 2:** 创建 `src/data/projects.js` — 7 个项目数据（STAR 结构）

从原始 `新建 文本文档.txt` 的 `projectsData` 提取，**重构为 STAR 格式**，每个项目包含：
```js
{
  id, title, role, period, company,
  situation,  // S - 项目背景与场景
  task,       // T - 职责与目标
  action,     // A - 关键动作（数组）
  result,     // R - 业务成果（数组）
  techStack,  // 技术标签
}
```

共 7 个项目：百度健康医生IP、CEO大模型、千锤Agent平台、拓客见鱼SCRM、销冠话术宝、Edu-Bot、练吧。

**Step 3:** 创建 `src/data/works.js` — 作品集数据

从 `作品集/projects/` 目录结构提取，每个作品包含：
```js
{
  id, title, category, // '产品文档' | '开源代码' | '方法论沉淀'
  shortDesc, details,
  githubLink,   // 可选
  screenshots,  // 截图路径数组（可选）
}
```

---

## Task 3: 组件 — Sidebar 左侧信息栏

**Files:**
- Create: `src/components/Sidebar.jsx`

**实现内容（从上到下）：**
1. **头像区** — 圆形容器，默认 User 图标占位，可替换为照片
2. **姓名 + 职位标签** — "秦宇龙" + 渐变胶囊 "AI 产品经理"
3. **核心评价** — 一句话灰底卡片
4. **关键数字** — 3 个 stat 小卡片（7+ AI 项目 / 2 段实习 / 10+ Agent）
5. **技能标签云** — AI 技能 + 产品技能，分类小标签
6. **荣誉列表** — 3 项荣誉
7. **联系方式** — 邮箱/手机/城市 + GitHub/LinkedIn 图标
8. **下载按钮** — "📥 下载 PDF 简历"

样式：`sticky top-8`，毛玻璃白底 `bg-white/80 backdrop-blur-xl`，圆角 `rounded-[2rem]`。

---

## Task 4: 组件 — Navigation 顶部导航

**Files:**
- Create: `src/components/Navigation.jsx`

**实现内容：**
- 4 个 Tab：首页 Profile / 项目实战 / 作品集 / 工作方法论
- 吸顶效果 `sticky top-4`，滚动时增加阴影和毛玻璃
- 移动端横向滚动 + 点击切换时自动回顶

```jsx
const navItems = [
  { id: 'profile', label: '首页简介', icon: User },
  { id: 'projects', label: '项目实战', icon: Layers },
  { id: 'portfolio', label: '个人作品', icon: Monitor },
  { id: 'methodology', label: '工作方法论', icon: Brain },
];
```

---

## Task 5: 页面 — Profile 首页

**Files:**
- Create: `src/components/pages/Profile.jsx`

**模块组成：**
1. **自我介绍** — 2 段文字，突出 "ToB AI 产品方向" + 核心优势
2. **工作经历时间线** — 2 段实习（快商通 + Auland），每段包含：公司名、角色、时间、1-2 条概述（使用竖线时间线样式）
3. **教育背景** — 马来亚大学硕士 + 天津财经大学本科，渐变卡片
4. **核心竞争力四宫格** — AI应用、知识库评测、ToB架构、商业思维

样式：各模块 `animate-slide-up` 入场动画。

---

## Task 6: 页面 — Projects 项目实战

**Files:**
- Create: `src/components/pages/Projects.jsx`
- Create: `src/components/ProjectModal.jsx`

**页面主体：**
- 7 个项目卡片，2 列网格 `grid-cols-2`
- 每张卡片显示：标题、角色胶囊、一句话简介、技术标签
- hover 上浮 + 渐变顶边

**弹窗详情（STAR 结构）：**
点击卡片弹出毛玻璃弹窗，内容分为 4 个区块：
1. **🎯 Situation** — 项目背景与场景
2. **📋 Task** — 职责与目标
3. **⚡ Action** — 关键动作列表
4. **📊 Result** — 业务成果与数据收益（带 ✓ 图标）
5. 底部：技术标签

---

## Task 7: 页面 — Portfolio 作品集

**Files:**
- Create: `src/components/pages/Portfolio.jsx`
- Create: `src/components/WorkModal.jsx`

**页面主体：**
- 作品卡片网格，每张卡片显示分类标签、标题、简介
- 支持两种交互：
  - 有 GitHub 链接的 → "在 GitHub 查看" 按钮
  - 有截图的 → 弹窗内展示脱敏文档截图/架构图

**弹窗详情：**
- 作品分类标签 + 标题
- 详细描述
- 截图画廊（如有）
- GitHub 跳转按钮（如有）

---

## Task 8: 页面 — Methodology 工作方法论

**Files:**
- Create: `src/components/pages/Methodology.jsx`

**模块组成：**
1. **核心竞争力** — 4 张卡片（AI应用、知识库评测、ToB架构、商业思维），与 Profile 中类似但更详细
2. **工作理念** — "极客与效能工具深度使用者" + "业务 ROI 与数据闭环建模"
3. **工具链展示** — Claude Code / Cursor / Dify / Python 等工具 icon 列表

样式：渐变背景卡片 + hover 缩放动画。

---

## Task 9: 主应用组装

**Files:**
- Modify: `src/App.jsx`

**实现内容：**
- 引入所有组件
- State 管理：`activeTab`, `selectedProject`, `selectedWork`, `isScrolled`
- 布局：左 `Sidebar` + 右 `Navigation` + 页面内容区
- 根据 `activeTab` 渲染对应页面组件
- 弹窗覆盖层

---

## Task 10: 静态资源 & 内容填充

**Files:**
- Create: `public/assets/` 目录
- Modify: 各数据文件

**步骤：**
1. 将头像照片（如有）放入 `public/assets/avatar.jpg`
2. 将作品集截图（从 `作品集/projects/*/assets/` 提取）复制到 `public/assets/portfolio/`
3. 将 PDF 简历（`秦宇龙 · 简历.pdf`）复制到 `public/assets/` 供下载按钮使用
4. 更新 `profile.js` 中的照片路径和下载链接

---

## Task 11: 响应式适配 & 最终验证

**步骤：**
1. 运行 `npm run dev`，逐页检查：
   - Profile 页：自我介绍、工作经历、教育、竞争力
   - Projects 页：卡片布局 + 弹窗 STAR 内容
   - Portfolio 页：作品展示 + 弹窗
   - Methodology 页：方法论展示
2. 检查移动端响应式（`lg:` 断点下左右变上下）
3. 检查弹窗关闭、Tab 切换、动画效果
4. 运行 `npm run build` 验证生产构建无报错

---

## 执行顺序

| 阶段 | 任务 | 预估时间 |
|---|---|---|
| 基础搭建 | Task 1 (初始化) → Task 2 (数据层) | 10 min |
| 骨架组件 | Task 3 (Sidebar) → Task 4 (Navigation) → Task 9 (App 组装) | 15 min |
| 页面开发 | Task 5 (Profile) → Task 6 (Projects) → Task 7 (Portfolio) → Task 8 (Methodology) | 30 min |
| 内容与验证 | Task 10 (静态资源) → Task 11 (验证) | 10 min |
