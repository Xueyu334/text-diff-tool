# 文本对比工具 (Text Diff Tool)

这是一个基于 Vue 3 + Vite 搭建的高性能代码/文本比对工具，使用了现阶段最流行的前端技术栈开发，具备完整的工程化配置，支持快速的文本比对、多种语言高亮以及丝滑的交互体验。

## 🌟 核心特性与亮点

- 🚀 **极速启动体验**：基于 Vite 构建引擎，深度配置了 `manualChunks` 及大文件分包，并提供相对路径的一键静态打开能力。
- ⚡ **原生框架底座**：采用基于 Composition API 的 **Vue 3**。
- 🎨 **现代 UI 及组件**：深度使用了 **Element Plus** 构建页面响应式网格及表单结构。
- 🔍 **核心比对引擎 (`vue-diff`)**：
  - 支持“并排(Split)”与“统一(Unified)”双形态视图。
  - 具备大文本的 **虚拟滚动 (Virtual Scroll)** 防卡顿渲染能力。
  - 智能支持长按/输入**防抖延迟 (`inputDelay`)**。
  - 支持折叠/展开未变更的冗长段落。
- 💡 **多语言与主题特性**：支持跨领域常见的纯文本、JSON、JavaScript、TypeScript、XML/HTML、CSS、Markdown 等语法高亮；自带亮色/暗色双主题快速切换。
- ✨ **极致的 UX 细节**：
  - 注入了原生 HTML + CSS 的**首屏加载骨架屏动画**，与 Vue 的 DOM 挂载无缝衔接，彻底消灭白屏空白等待；
  - 巧用框架原生的 `show-word-limit` 接入了高实时性的文本字数监控，并通过常量的提取统一限高至 100 万字承载量；
  - 开发了贴心的**“一键清空”**跟**“左右对调”**敏捷功能面板；
  - 基于全自动注入导入的 `computed` 函数实现了无需按钮的高智能“内容完全一致”实时判定计算，以及伴有转场效果的成功绿标气泡反馈。
- 🛠️ **完美的开发者工程体验**：全链路打通了 `unplugin-vue-components` 与 `unplugin-auto-import`，绝大多数 Element 组件库与 Vue / VueUse 核心基础 API 皆为**全自动按需静默导入**，业务代码里零 `import` 冗余。同时针对不同的场景配备了 `.env.development` 及 `.env.production` 环境路径分离方案。

---

## 📦 本地运行与部署指南

### 依赖环境要求

请确保你的本地计算机或部署的 CI/CD 容器中安装了 **Node.js** (推荐长效支持版 `v18+` 或更高版本)。

### 1. 拉取并安装依赖

```bash
git clone https://github.com/Xueyu334/text-diff-tool.git
cd text-diff-tool
npm install
```

### 2. 开发环境热重载运行

```bash
npm run dev
# Vite 将会自动在你的浏览器开启 http://localhost:5173 甚至支持通过 IPv4 局域网被移动设备访问。
```

### 3. 构建与生产部署

```bash
npm run build
```

打包过程将自动关闭内部的源码 SourceMap（防止资产泄露及减小包体积）。打包完成后，高度精简和分类好的静态化资源会统一输出到项目根底下的 `dist/` 文件夹内。你可以直接将其内部所有文件上传、挂载入 Nginx 或各静态云托管平台运行。
