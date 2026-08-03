import { http } from './http'

export const api = {
  async bootstrap(username: string, password: string) {
    await http.post('/auth/bootstrap', { username, password })
  },
  async login(username: string, password: string) {
    const { data } = await http.post('/auth/login', { username, password })
    return data as { access_token: string }
  },
  async listProjects() {
    const { data } = await http.get('/projects')
    return data as Array<{ id: number; name: string; description?: string }>
  },
  async createProject(payload: { name: string; description?: string }) {
    const { data } = await http.post('/projects', payload)
    return data as { id: number; name: string; description?: string }
  },
  async listModels(projectId?: number) {
    const { data } = await http.get('/models', { params: { project_id: projectId } })
    return data as Array<{ id: number; project_id: number; name: string; manifest_key: string }>
  },
  async getModel(modelId: number) {
    const { data } = await http.get(`/models/${modelId}`)
    return data as { id: number; project_id: number; name: string; manifest_key: string }
  },
  async createModel(payload: { project_id: number; name: string }) {
    const { data } = await http.post('/models', payload)
    return data as { id: number; project_id: number; name: string }
  },
  async uploadModelZip(modelId: number, file: File) {
    const fd = new FormData()
    fd.append('file', file)
    const { data } = await http.post(`/models/${modelId}/upload-zip`, fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return data
  },
  async presignManifest(modelId: number) {
    const { data } = await http.get(`/models/${modelId}/manifest-presign`)
    return data as { url: string }
  },
  async presignFile(modelId: number, key: string) {
    const { data } = await http.get(`/models/${modelId}/file-presign`, { params: { key } })
    return data as { url: string }
  },
  async listMeasurements(modelId: number) {
    const { data } = await http.get('/measurements', { params: { model_id: modelId } })
    return data as Array<any>
  },
  async createMeasurement(payload: { model_id: number; type: string; payload: any }) {
    const { data } = await http.post('/measurements', payload)
    return data as any
  }
}
