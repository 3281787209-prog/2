<template>
  <div class="home">
    <section class="hero page-card">
      <div class="hero-left">
        <div class="hero-kicker">工程数字化协同应用</div>
        <h1>土石平衡与三维分析网站</h1>
        <p>
          这是按你给出的场景整理后的前端成品站点。页面已经分成土石平衡、三维开挖分析、锚索结构可视化、模型资产中心四个主模块，
          你可以直接把这一套前端上传到 GitHub，再逐步把接口换成 FastAPI。
        </p>
        <div class="hero-actions">
          <router-link to="/balance"><el-button type="primary" size="large">查看土石平衡</el-button></router-link>
          <router-link to="/viewer"><el-button size="large">查看三维分析</el-button></router-link>
        </div>
      </div>
      <div class="hero-right">
        <div class="orb"></div>
        <div class="hero-panel">
          <div class="panel-head">当前交付内容</div>
          <div class="panel-line" v-for="item in workflow" :key="item">{{ item }}</div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div v-for="item in summaryCards" :key="item.label" class="stat page-card">
        <div class="stat-label">{{ item.label }}</div>
        <div class="stat-value">{{ item.value }}</div>
        <div class="stat-note">{{ item.note }}</div>
      </div>
    </section>

    <section class="modules page-card">
      <div class="module-header">
        <div>
          <h2 class="section-title">业务模块</h2>
          <p class="section-subtitle">按你发来的全部应用场景，归纳成可直接展示与后续开发的四个主页面。</p>
        </div>
      </div>
      <div class="module-grid">
        <router-link class="module-item" v-for="item in modules" :key="item.title" :to="item.route">
          <div class="module-title">{{ item.title }}</div>
          <div class="module-desc">{{ item.desc }}</div>
          <div class="module-link">进入模块</div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { modules, summaryCards, workflow } from '../mock/site'
</script>

<style scoped>
.home {
  height: calc(100vh - 74px - 36px);
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 16px;
  overflow: auto;
}
.hero {
  min-height: 280px;
  padding: 28px;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  background:
    radial-gradient(circle at right top, rgba(37, 99, 235, 0.12), transparent 32%),
    linear-gradient(135deg, rgba(255,255,255,.96), rgba(248,251,255,.92));
}
.hero-kicker {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: #e0e7ff;
  color: #4338ca;
  font-size: 12px;
  font-weight: 700;
}
h1 {
  margin: 18px 0 14px;
  font-size: 34px;
  line-height: 1.2;
  color: #0f172a;
}
p {
  margin: 0;
  max-width: 720px;
  font-size: 15px;
  line-height: 1.9;
  color: #475569;
}
.hero-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
}
.hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orb {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(96, 165, 250, 0.8), rgba(59, 130, 246, 0.25) 45%, rgba(37, 99, 235, 0.06) 72%, transparent 73%);
  filter: blur(8px);
}
.hero-panel {
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(191, 219, 254, 0.95);
  box-shadow: 0 14px 30px rgba(59, 130, 246, 0.09);
}
.panel-head {
  font-weight: 700;
  margin-bottom: 12px;
  color: #0f172a;
}
.panel-line {
  padding: 10px 0;
  border-bottom: 1px dashed rgba(148, 163, 184, 0.34);
  color: #475569;
  font-size: 14px;
  line-height: 1.7;
}
.panel-line:last-child {
  border-bottom: none;
}
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.stat {
  padding: 20px;
}
.stat-label {
  font-size: 13px;
  color: #64748b;
}
.stat-value {
  margin-top: 10px;
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
}
.stat-note {
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.7;
  color: #64748b;
}
.modules {
  padding: 24px;
}
.module-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.module-item {
  padding: 18px;
  border-radius: 18px;
  background: linear-gradient(180deg, #ffffff, #f8fbff);
  border: 1px solid #dbe7f5;
  transition: transform .2s ease, box-shadow .2s ease;
}
.module-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.08);
}
.module-title {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
.module-desc {
  margin-top: 10px;
  min-height: 50px;
  font-size: 14px;
  line-height: 1.8;
  color: #64748b;
}
.module-link {
  margin-top: 16px;
  font-size: 13px;
  font-weight: 700;
  color: #2563eb;
}
</style>
