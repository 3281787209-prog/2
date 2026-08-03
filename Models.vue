<template>
  <div class="models-page">
    <section class="intro page-card">
      <div>
        <h2 class="section-title">模型资产中心</h2>
        <p class="section-subtitle">
          这个页面直接给你准备好了后续接后端时需要的模型字段、文件规范和接入说明。现在上传 GitHub 后，它就是一个完整的网站页面；
          后续只要把这里的静态内容替换成真实接口响应即可。
        </p>
      </div>
    </section>

    <section class="grid">
      <div class="page-card left">
        <div class="block-title">建议的模型目录结构</div>
        <pre class="code">public/
  demo-models/
    exac_23/
      index.json
      full_model.vtp
      cavity_surface.vtp
      slice_x_174.vtp
      slice_y_-185.vtp
      slice_z_587.vtp</pre>

        <div class="block-title">后续对接 FastAPI 时的建议接口</div>
        <ul class="list">
          <li>`GET /api/v1/models`：获取模型列表</li>
          <li>`POST /api/v1/models/upload-zip`：上传 `model_cache.zip`</li>
          <li>`GET /api/v1/models/{id}/manifest`：获取 `index.json`</li>
          <li>`GET /api/v1/models/{id}/file-presign?key=...`：拿对象存储临时地址</li>
        </ul>
      </div>

      <div class="page-card right">
        <div class="block-title">你上传到 GitHub 前，前端里建议保留的静态内容</div>
        <div class="tag-grid">
          <div class="tag-item">首页大屏</div>
          <div class="tag-item">土石平衡总览</div>
          <div class="tag-item">三维开挖分析</div>
          <div class="tag-item">锚索结构可视化</div>
          <div class="tag-item">模型资产中心</div>
          <div class="tag-item">接口替换说明</div>
        </div>

        <div class="block-title">静态站点上线建议</div>
        <ul class="list">
          <li>先把 `vit1/` 整个上传到 GitHub 仓库。</li>
          <li>用 GitHub Pages、Vercel 或 Netlify 发布前端。</li>
          <li>等 FastAPI 部署好后，把前端里的假数据替换成接口请求。</li>
          <li>如果模型文件大，不要放 GitHub，改走对象存储。</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.models-page {
  height: calc(100vh - 74px - 36px);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
}
.intro {
  padding: 24px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  min-height: 0;
}
.left,
.right {
  padding: 22px;
}
.block-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 14px;
}
.block-title:not(:first-child) {
  margin-top: 22px;
}
.code {
  margin: 0;
  padding: 18px;
  border-radius: 16px;
  background: #0f172a;
  color: #dbeafe;
  font-size: 13px;
  line-height: 1.8;
  overflow: auto;
}
.list {
  margin: 0;
  padding-left: 18px;
  line-height: 2;
  color: #475569;
  font-size: 14px;
}
.tag-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.tag-item {
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbff);
  border: 1px solid #dbe7f5;
  font-weight: 700;
  color: #1e293b;
}
</style>
