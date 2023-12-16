import type { App } from 'vue';
import UviewPlus from './uview-plus'

export default {
  install(app : App) {
    app.use(UviewPlus)
  },
}
