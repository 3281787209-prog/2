## 土石平衡/三维模型系统（VIT1 + FastAPI + MySQL + 对象存储）

本交付物包含两部分：
- `vit1/`：前端（Vite + Vue3），页面结构按你提供的两张效果图做了「左侧深色导航 + 中间三维视窗 + 左侧/右侧业务面板」的布局。
- `backend/`：后端（Python FastAPI），对接 MySQL，并用 S3 兼容对象存储（示例使用 MinIO）保存导入文件（如 `model_cache/*.vtp`、`index.json`）。

> 说明：你提到“继续使用你的 VIT1 项目”。如果你把 VIT1 **源码工程**（包含 `src/`、`package.json` 等）放到你当前选择的文件夹里，我可以把 `vit1/src` 里的代码“精确嵌入”到你现有工程中；目前我先给出一份可运行的 VIT1 基础工程骨架，便于你直接跑通。

### 本地启动（推荐：Docker 一键启动后端依赖）

1. 启动 MySQL + MinIO：
   - 在本目录执行：`docker compose up -d`
2. 启动后端：
   - 进入 `backend/`
   - 创建虚拟环境并安装依赖：`pip install -r requirements.txt`
   - 运行：`uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`
3. 启动前端：
   - 进入 `vit1/`
   - 安装依赖：`npm i`
   - 运行：`npm run dev`

### 默认地址（可按需修改）
- 前端：`http://localhost:5173`
- 后端：`http://localhost:8000`
- 后端接口文档：`http://localhost:8000/docs`
- MinIO Console：`http://localhost:9001`

