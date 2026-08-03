<template>
  <div class="structure-page">
    <aside class="catalog page-card">
      <div class="catalog-title">结构目录</div>
      <div class="catalog-list">
        <div
          v-for="item in structureList"
          :key="item.id"
          class="catalog-item"
          :class="{ active: current.id === item.id }"
          @click="current = item"
        >
          {{ item.id }}
        </div>
      </div>
    </aside>

    <section class="stage page-card">
      <img class="stage-image" :src="demoStructure" alt="锚索结构示意图" />
    </section>

    <aside class="detail page-card">
      <div class="detail-title">结构详情 - {{ current.id }}</div>
      <div class="detail-grid">
        <div class="item">
          <span>编号</span>
          <strong>{{ current.id }}</strong>
        </div>
        <div class="item">
          <span>规格</span>
          <strong>{{ current.spec }}</strong>
        </div>
        <div class="item">
          <span>角度</span>
          <strong>{{ current.angle }}</strong>
        </div>
        <div class="item">
          <span>岩性分级</span>
          <strong>{{ current.grade }}</strong>
        </div>
        <div class="item">
          <span>注浆参数</span>
          <strong>{{ current.stress }}</strong>
        </div>
        <div class="item">
          <span>说明</span>
          <strong>用于边坡支护、稳定分析与构件排布校核</strong>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import demoStructure from '../assets/demo-structure.jpg'
import { structureList } from '../mock/site'

const current = ref(structureList[2])
</script>

<style scoped>
.structure-page {
  height: calc(100vh - 74px - 36px);
  display: grid;
  grid-template-columns: 220px 1fr 320px;
  gap: 16px;
}
.catalog,
.detail {
  padding: 18px;
}
.catalog-title,
.detail-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
.catalog-list {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.catalog-item {
  padding: 12px 14px;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  color: #334155;
  font-weight: 600;
}
.catalog-item.active {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1d4ed8;
}
.stage {
  overflow: hidden;
}
.stage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.detail-grid {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}
.item {
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: linear-gradient(180deg, #ffffff, #f8fbff);
}
.item span {
  display: block;
  font-size: 12px;
  color: #64748b;
}
.item strong {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.8;
  color: #0f172a;
}
</style>
