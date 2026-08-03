<template>
  <div class="page">
    <aside class="left-panel page-card">
      <div class="panel-title">开挖工况 / 计算工况选择</div>
      <div class="control-group">
        <div class="control-label">开挖工况</div>
        <el-select v-model="scene" style="width: 100%">
          <el-option label="exac_23" value="exac_23" />
          <el-option label="exac_18" value="exac_18" />
          <el-option label="exac_12" value="exac_12" />
        </el-select>
      </div>

      <div class="control-group">
        <div class="control-label">显示内容</div>
        <el-checkbox v-model="showCavity">空腔/边界面</el-checkbox>
        <el-checkbox v-model="showDynamic">边坡开挖分步动画</el-checkbox>
        <el-checkbox v-model="showSlice">激活切面分析</el-checkbox>
      </div>

      <div class="control-group">
        <div class="control-label">云图透明度</div>
        <el-slider v-model="opacity" />
      </div>

      <div class="control-group">
        <div class="control-label">切面方向</div>
        <div class="axis-row">
          <div class="axis" :class="{ active: axis === 'x' }" @click="axis = 'x'">X轴切面</div>
          <div class="axis" :class="{ active: axis === 'y' }" @click="axis = 'y'">Y轴切面</div>
          <div class="axis" :class="{ active: axis === 'z' }" @click="axis = 'z'">Z轴切面</div>
        </div>
      </div>

      <div class="control-group">
        <div class="control-label">断面序号</div>
        <el-slider v-model="sliceIndex" :min="0" :max="60" />
      </div>

      <div class="control-group">
        <div class="control-label">计算物理量</div>
        <el-select v-model="field" style="width: 100%">
          <el-option label="总位移 TotalDisplacement" value="总位移" />
          <el-option label="X向位移 X_Disp" value="X向位移" />
          <el-option label="Y向位移 Y_Disp" value="Y向位移" />
          <el-option label="Z向位移 Z_Disp" value="Z向位移" />
        </el-select>
      </div>

      <div class="btn-group">
        <el-button type="primary">加载工况模型</el-button>
        <el-button>切片联动分析</el-button>
      </div>

      <div class="note">
        这里已经按你的截图做成前端展示页面。当前中心区域先展示参考效果图，等你后面把后端接口和真实模型地址接上后，
        再替换成真实 VTP/VTK 渲染即可。
      </div>
    </aside>

    <section class="viewer page-card">
      <img class="viewer-image" :src="demoExcavation" alt="开挖分析示意图" />
      <div class="viewer-overlay">
        <div class="overlay-title">当前工况：{{ scene }}</div>
        <div class="overlay-sub">字段：{{ field }} / 切面：{{ axis.toUpperCase() }} / 断面序号：{{ sliceIndex }}</div>
      </div>
    </section>

    <aside class="right-panel">
      <div class="legend page-card">
        <div class="legend-title">总位移绝对值 (m)</div>
        <div class="legend-bar"></div>
        <div class="legend-ticks">
          <span>0.021</span>
          <span>0.014</span>
          <span>0.007</span>
          <span>0.001</span>
        </div>
      </div>

      <div class="info page-card">
        <div class="info-title">页面后续接后端时要接的内容</div>
        <ul>
          <li>模型清单：工况、版本、上传时间、对象存储路径</li>
          <li>manifest：`index.json` 对应的 full/cavity/slices 路径</li>
          <li>量算结果：距离、面积、体积、取点坐标、操作者</li>
          <li>监测字段：总位移、分向位移、主应力、构件状态</li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import demoExcavation from '../assets/demo-excavation.png'

const scene = ref('exac_23')
const field = ref('总位移')
const axis = ref<'x' | 'y' | 'z'>('y')
const sliceIndex = ref(18)
const opacity = ref(65)
const showCavity = ref(true)
const showDynamic = ref(true)
const showSlice = ref(true)
</script>

<style scoped>
.page {
  height: calc(100vh - 74px - 36px);
  display: grid;
  grid-template-columns: 340px 1fr 280px;
  gap: 12px;
  overflow: hidden;
}
.left-panel {
  overflow: auto;
  padding: 18px;
}
.panel-title {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 18px;
}
.control-group {
  margin-bottom: 18px;
}
.control-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 8px;
}
.axis-row {
  display: flex;
  gap: 8px;
}
.axis {
  flex: 1;
  padding: 10px 8px;
  text-align: center;
  font-size: 12px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #dbe4ef;
  cursor: pointer;
  color: #475569;
}
.axis.active {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1d4ed8;
  font-weight: 700;
}
.btn-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.note {
  margin-top: 18px;
  padding: 14px;
  border-radius: 16px;
  background: #f8fbff;
  border: 1px solid #dbeafe;
  color: #64748b;
  font-size: 12px;
  line-height: 1.8;
}
.viewportWrap {
  position: relative;
  overflow: hidden;
}
.viewer {
  position: relative;
  overflow: hidden;
}
.viewer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.viewer-overlay {
  position: absolute;
  left: 18px;
  top: 18px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255,255,255,0.84);
  border: 1px solid rgba(219, 234, 254, 0.92);
  backdrop-filter: blur(8px);
}
.overlay-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
.overlay-sub {
  margin-top: 6px;
  color: #475569;
  font-size: 12px;
}
.legend {
  padding: 16px;
}
.legendTitle {
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 8px;
}
.legend-title {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}
.legend-bar {
  margin-top: 14px;
  height: 240px;
  border-radius: 16px;
  background: linear-gradient(180deg, #d90429 0%, #f77f00 23%, #ffd60a 45%, #43aa8b 68%, #3a86ff 86%, #1d3557 100%);
}
.legendTicks {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 12px;
  color: #374151;
}
.rightPanel {
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.right-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.info {
  padding: 16px;
}
.info-title {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}
ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #475569;
  line-height: 1.9;
  font-size: 13px;
}
</style>
