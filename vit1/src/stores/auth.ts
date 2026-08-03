import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  getters: {
    isAuthed: (s) => !!s.token
  },
  actions: {
    setToken(t: string) {
      this.token = t
      localStorage.setItem('token', t)
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})

