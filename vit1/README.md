## 前端站点（Vue3 + Vite）

你给的基础网站是 Vite 打包后的 `index.html + /assets/*` 结构；我已经把新的前端站点内容（首页大屏、土石平衡、三维分析、结构可视化、模型资产中心）做成同样的 Vue3+Vite 项目，并把 `index.html` 标题/结构对齐到你的基础站点。

### 本地运行
1. 安装依赖：`npm i`
2. 启动开发：`npm run dev`

### 构建成“网站文件”（用于替换你现有网站）
1. 构建：`npm run build`
2. 产物在 `dist/`
   - `dist/index.html`
   - `dist/assets/*`
3. 用 `dist/` 整个目录内容替换你现有网站目录（同名文件覆盖即可）

### 上传 GitHub Pages（推荐：自动构建发布）
本项目已内置 GitHub Actions：`.github/workflows/deploy-pages.yml`

1. 把本目录内容作为仓库根目录推到 GitHub（分支 `main`）
2. 在 GitHub 仓库 Settings → Pages：
   - Build and deployment 选择 `GitHub Actions`
3. 之后每次 push 到 `main` 会自动构建并发布

> 注意：`vite.config.ts` 已设置 `base: './'`，适配 GitHub Pages 的相对路径；如果你把站点部署在域名根路径且希望资源走 `/assets/...`，可把它改回 `base: '/'` 再重新构建。

