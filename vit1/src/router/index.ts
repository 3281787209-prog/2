import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/Home.vue'
import DashboardPage from '../pages/Dashboard.vue'
import ModelsPage from '../pages/Models.vue'
import ModelViewerPage from '../pages/ModelViewer.vue'
import StructurePage from '../pages/Structure.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: HomePage },
        { path: 'balance', component: DashboardPage },
        { path: 'models', component: ModelsPage },
        { path: 'viewer', component: ModelViewerPage },
        { path: 'structure', component: StructurePage }
      ]
    }
  ]
})
