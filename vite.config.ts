import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import ViteAutoImport from 'unplugin-auto-import/vite'
import ViteAutoComponents from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

/**
 * Vite 配置
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  build: {
    // 在开发阶段启用源码映射，方便调试
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    /**
     * Vite Auto Import 插件，自动导入模块，减少手动导入的工作
     * @see https://github.com/antfu/unplugin-auto-import
     */
    ViteAutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dirs: ['src/utils'],
      dts: 'src/types/auto-imports.d.ts',
    }),

    /**
     * Vite Auto Components 插件，自动导入 Vue 组件，减少手动导入和注册的工作
     * @see https://github.com/antfu/unplugin-vue-components
     */
    ViteAutoComponents({
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: 'src/types/auto-components.d.ts',
    }),

    /**
     * unocss
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
    Unocss(),

    /**
     * uni 插件，用于支持 uni-app 项目
     * @see https://github.com/dcloudio/vite-plugin-uni
     */
    uni(),
  ],
})
