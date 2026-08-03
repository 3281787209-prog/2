<template>
  <div class="wrap">
    <div class="card">
      <div class="title">登录</div>
      <el-form :model="form" label-position="top">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="admin" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
      </el-form>
      <div class="actions">
        <el-button type="primary" :loading="loading" @click="onLogin">登录</el-button>
        <el-button :loading="booting" @click="onBootstrap" title="仅首次初始化时需要">初始化管理员</el-button>
      </div>
      <div class="hint">
        首次使用：点“初始化管理员”创建账号，然后再登录。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { api } from '../api'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = reactive({ username: 'admin', password: 'admin123' })
const loading = ref(false)
const booting = ref(false)

async function onBootstrap() {
  booting.value = true
  try {
    await api.bootstrap(form.username, form.password)
    ElMessage.success('初始化成功，请点击登录')
  } catch (e: any) {
    ElMessage.error(e?.response?.data?.detail || '初始化失败')
  } finally {
    booting.value = false
  }
}

async function onLogin() {
  loading.value = true
  try {
    const { access_token } = await api.login(form.username, form.password)
    auth.setToken(access_token)
    router.push('/')
  } catch (e: any) {
    ElMessage.error(e?.response?.data?.detail || '登录失败')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.wrap {
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #0b1220 0%, #0b1220 45%, #f5f7fb 45%, #f5f7fb 100%);
}
.card {
  width: 360px;
  background: #ffffff;
  border-radius: 12px;
  padding: 22px 18px;
  border: 1px solid #e5e7eb;
}
.title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 14px;
}
.actions {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}
.hint {
  margin-top: 12px;
  color: #6b7280;
  font-size: 12px;
  line-height: 18px;
}
</style>

