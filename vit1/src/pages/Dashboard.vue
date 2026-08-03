<template>
  <div class="dashboard">
    <section class="overview">
      <div v-for="item in balanceMetrics" :key="item.name" class="metric page-card">
        <div class="metric-name">{{ item.name }}</div>
        <div class="metric-value">{{ item.value }}</div>
        <div class="metric-trend">{{ item.trend }}</div>
      </div>
    </section>

    <section class="main-grid">
      <div class="panel page-card">
        <div class="panel-header">
          <div>
            <h2 class="section-title">土石平衡趋势</h2>
            <p class="section-subtitle">这里先用静态页面展示整体走势，后面可替换为真实接口和图表组件。</p>
          </div>
        </div>
        <div class="bars">
          <div class="bar-row" v-for="row in balanceTable" :key="row.zone">
            <div class="bar-label">{{ row.zone }}</div>
            <div class="bar-track">
              <div class="bar excavate" :style="{ width: `${Number(row.excavate) * 3.2}px` }"></div>
              <div class="bar backfill" :style="{ width: `${Number(row.backfill) * 3.2}px` }"></div>
              <div class="bar waste" :style="{ width: `${Number(row.waste) * 3.2}px` }"></div>
            </div>
            <div class="bar-status" :class="row.status">{{ row.status }}</div>
          </div>
        </div>
      </div>

      <div class="panel page-card">
        <div class="panel-header">
          <div>
            <h2 class="section-title">分区平衡表</h2>
            <p class="section-subtitle">单位：万m³</p>
          </div>
        </div>
        <el-table :data="balanceTable" height="100%">
          <el-table-column prop="zone" label="工区" min-width="180" />
          <el-table-column prop="excavate" label="开挖量" />
          <el-table-column prop="backfill" label="回填量" />
          <el-table-column prop="waste" label="弃渣量" />
          <el-table-column prop="stock" label="库存量" />
          <el-table-column prop="status" label="状态" />
        </el-table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { balanceMetrics, balanceTable } from '../mock/site'
</script>

<style scoped>
.dashboard {
  height: calc(100vh - 74px - 36px);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
}
.overview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.metric {
  padding: 20px 22px;
}
.metric-name {
  color: #64748b;
  font-size: 13px;
}
.metric-value {
  margin-top: 10px;
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
}
.metric-trend {
  margin-top: 8px;
  color: #16a34a;
  font-size: 13px;
  font-weight: 700;
}
.main-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 16px;
  min-height: 0;
}
.panel {
  min-height: 0;
  padding: 22px;
}
.panel-header {
  margin-bottom: 16px;
}
.bars {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.bar-row {
  display: grid;
  grid-template-columns: 110px 1fr 56px;
  gap: 12px;
  align-items: center;
}
.bar-label {
  font-size: 13px;
  color: #334155;
  font-weight: 700;
}
.bar-track {
  position: relative;
  height: 52px;
  border-radius: 16px;
  padding: 8px;
  background: linear-gradient(180deg, #f8fbff, #f1f5f9);
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 8px;
  align-items: center;
}
.bar {
  height: 14px;
  border-radius: 999px;
}
.excavate {
  background: linear-gradient(90deg, #1d4ed8, #60a5fa);
}
.backfill {
  background: linear-gradient(90deg, #10b981, #6ee7b7);
}
.waste {
  background: linear-gradient(90deg, #f59e0b, #fcd34d);
}
.bar-status {
  font-size: 12px;
  font-weight: 700;
  text-align: right;
}
.bar-status.正常 {
  color: #16a34a;
}
.bar-status.关注 {
  color: #d97706;
}
.bar-status.预警 {
  color: #dc2626;
}
</style>
