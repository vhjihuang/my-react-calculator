# React Calculator | React 计算器

一个使用 React + TypeScript + Vite 构建的现代化计算器应用，具有优雅的用户界面和完整的计算功能。

## 🌟 在线演示

**Live Demo:** [https://vhjihuang.github.io/my-react-calculator/](https://vhjihuang.github.io/my-react-calculator/)

## ✨ 功能特性

- 🧮 **基本四则运算**：支持加法、减法、乘法、除法
- 🔢 **数字输入**：0-9 数字按钮输入
- 📍 **小数点支持**：支持小数运算
- 🗑️ **清除功能**：一键清除当前输入
- ⚡ **实时计算**：即时显示计算结果
- 🎨 **现代化UI**：优雅的深色主题设计
- 📱 **响应式布局**：适配不同屏幕尺寸
- 🔄 **错误处理**：除零错误和无效输入处理

## 🛠️ 技术栈

- **前端框架**: React 19.1.0
- **类型系统**: TypeScript 5.8.3
- **构建工具**: Vite 7.0.4
- **代码规范**: ESLint + TypeScript ESLint
- **样式**: CSS3 (CSS Variables, Grid Layout, Flexbox)
- **部署**: GitHub Pages + GitHub Actions

## 🚀 快速开始

### 环境要求

- Node.js >= 20.19.0
- npm >= 9.0.0

### 本地开发

```bash
# 克隆项目
git clone https://github.com/vhjihuang/my-react-calculator.git
cd my-react-calculator

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中访问 http://localhost:5173
```

### 构建和预览

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 📦 部署

### 自动部署 (GitHub Actions)

项目配置了自动化部署流程，当代码推送到 `main` 分支时会自动触发：

1. **自动构建**: 使用 Vite 构建生产版本
2. **自动部署**: 部署到 GitHub Pages
3. **在线访问**: 通过 GitHub Pages URL 访问应用

### 手动部署

```bash
# 构建并部署到 GitHub Pages
npm run deploy
```

## 📁 项目结构

```
my-react-calculator/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── src/
│   ├── App.tsx                 # 主应用组件
│   ├── App.css                 # 应用样式
│   ├── main.tsx                # 应用入口
│   ├── index.css               # 全局样式
│   └── vite-env.d.ts          # Vite 类型定义
├── public/                     # 静态资源
├── dist/                       # 构建输出目录
├── vite.config.ts             # Vite 配置
├── tsconfig.json              # TypeScript 配置
├── eslint.config.js           # ESLint 配置
├── package.json               # 项目依赖和脚本
└── README.md                  # 项目说明
```

## ⚙️ 配置说明

### Vite 配置 (`vite.config.ts`)

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/my-react-calculator/',  // GitHub Pages 部署路径
  build: {
    outDir: 'dist',              // 构建输出目录
    assetsDir: 'assets',         // 静态资源目录
  },
})
```

### GitHub Pages 部署配置

- **部署分支**: `gh-pages` (自动创建)
- **构建工具**: GitHub Actions
- **触发条件**: 推送到 `main` 分支
- **部署URL**: `https://vhjihuang.github.io/my-react-calculator/`

## 🎨 UI 设计特色

- **现代化设计**: 采用深色主题和渐变背景
- **按钮布局**: 4×5 网格布局，按钮尺寸统一 (82px × 64px)
- **显示区域**: 100px 高度，支持长数字显示
- **交互效果**: 悬停动画和点击反馈
- **响应式**: 支持浅色/深色主题自动切换

## 📝 开发说明

### 主要组件

- **App.tsx**: 主计算器组件，包含所有计算逻辑
- **按钮系统**: 数字按钮、运算符按钮、功能按钮
- **显示系统**: 实时显示当前输入和计算结果
- **计算引擎**: 支持连续运算和错误处理

### 样式系统

- **CSS Variables**: 统一的颜色和尺寸管理
- **Grid Layout**: 按钮网格布局
- **Flexbox**: 内容居中和对齐
- **响应式**: 支持不同屏幕尺寸

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License

---

**技术支持**: React + TypeScript + Vite  
**部署平台**: GitHub Pages  
**自动化**: GitHub Actions
