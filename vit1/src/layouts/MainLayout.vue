<template>
  <div class="layout">
    <aside class="sider">
      <div class="brand">
        <div class="brand-title">工程数字化协同大屏</div>
        <div class="brand-sub">土石平衡与三维分析系统</div>
      </div>

      <div class="menu-title">应用目录</div>

      <el-menu :default-active="active" class="menu" router background-color="transparent" text-color="#cbd5e1" active-text-color="#ffffff">
        <el-menu-item index="/">
          <span>首页大屏</span>
        </el-menu-item>
        <el-menu-item index="/balance">
          <span>土石平衡</span>
        </el-menu-item>
        <el-menu-item index="/viewer">
          <span>三维开挖分析</span>
        </el-menu-item>
        <el-menu-item index="/structure">
          <span>锚索结构可视化</span>
        </el-menu-item>
        <el-menu-item index="/models">
          <span>模型资产中心</span>
        </el-menu-item>
      </el-menu>

      <div class="sider-footer">
        <div class="footer-chip">可直接上传 GitHub</div>
        <div class="footer-text">当前为前端成品版，后续可替换为真实 FastAPI 接口。</div>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <div>
          <div class="crumb">{{ title }}</div>
          <div class="crumb-sub">{{ subtitle }}</div>
        </div>
        <div class="top-actions">
          <div class="tag">Vue3 + Vite</div>
          <div class="tag">可接 FastAPI</div>
        </div>
      </header>
      <section class="content">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const active = computed(() => (route.path === '/' ? '/' : route.path))
const title = computed(() => {
  if (route.path.startsWith('/balance')) return '土石平衡总览'
  if (route.path.startsWith('/viewer')) return '三维开挖分析'
  if (route.path.startsWith('/structure')) return '锚索结构可视化'
  if (route.path.startsWith('/models')) return '模型资产中心'
  return '首页大屏'
})
const subtitle = computed(() => {
  if (route.path.startsWith('/balance')) return '围绕开挖、回填、弃渣、库存和偏差形成项目级业务总览。'
  if (route.path.startsWith('/viewer')) return '按你给的效果图组织三维分析页面，便于后续接入真实模型。'
  if (route.path.startsWith('/structure')) return '展示锚索编号、参数、角度、层位关系与结构属性。'
  if (route.path.startsWith('/models')) return '放置模型文件、manifest、版本说明和后端接入规则。'
  return '把全部应用场景统一收纳成一个可直接交付和演示的网站前端。'
})
</script>

<style scoped>
.layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
  background: transparent;
}
.sider {
  background:
    linear-gradient(180deg, #061127 0%, #07162e 55%, #08192f 100%);
  color: #cbd5e1;
  display: flex;
  flex-direction: column;
  padding: 18px 14px;
  border-right: 1px solid rgba(148, 163, 184, 0.12);
}
.brand {
  padding: 14px 14px 18px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
  margin-bottom: 10px;
}
.brand-title {
  font-weight: 700;
  font-size: 18px;
  color: #e2e8f0;
}
.brand-sub {
  margin-top: 8px;
  font-size: 12px;
  line-height: 18px;
  color: rgba(226, 232, 240, 0.72);
}
.menu-title {
  padding: 10px 14px 6px;
  color: rgba(226, 232, 240, 0.52);
  font-size: 12px;
}
.menu {
  border-right: none;
  background: transparent;
}
.sider-footer {
  margin-top: auto;
  padding: 16px 14px;
  border-top: 1px solid rgba(148, 163, 184, 0.15);
}
.footer-chip {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.14);
  color: #bfdbfe;
  font-size: 12px;
}
.footer-text {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  color: rgba(226, 232, 240, 0.68);
}
.main {
  display: grid;
  grid-template-rows: 74px 1fr;
  height: 100vh;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(207, 216, 230, 0.88);
}
.crumb {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
}
.crumb-sub {
  margin-top: 6px;
  font-size: 12px;
  color: #64748b;
}
.top-actions {
  display: flex;
  gap: 10px;
}
.tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: #eff6ff;
  border: 1px solid #dbeafe;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
}
.content {
  padding: 18px;
  overflow: hidden;
}
</style>
