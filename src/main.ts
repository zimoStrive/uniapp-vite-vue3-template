import { createSSRApp } from 'vue'
import { useModal, useToast, useLoading } from '@/utils/uniModals'
import 'uno.css'
import pinia from './stores'
import plugins from '@/plugins/index'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  app.use(plugins)
  app.provide('$useModal', useModal)
  app.provide('$useToast', useToast)
  app.provide('$useLoading', useLoading)

  return {
    app,
  }
}
