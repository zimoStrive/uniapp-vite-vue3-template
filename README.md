# uniapp + vite + pinia + ts + axios 项目模板快速开发

该模板是基于 uniapp + Vue3 + vite + pinia + ts + axios 项目模板快速开发，适用于小程序开发 h5。有问题可以**提 issue**或者**pull request**

> 注意：目前最新 vite5 + 该项目模板为了更好兼容用了 vite4 最新。如果项目需要使用 vite5，需要改某些包的语法即可。vite 有语法更改。

## 项目介绍

- 项目基于 uniapp + Vue3 + vite + pinia + ts + axios 项目模板快速开发，适用于小程序开发 h5。
- 项目使用了 vite 作为开发工具，支持 esm、cjs、iife 三种打包方式，支持按需加载，支持热更新。

## 项目运行

```bash
# 安装依赖
npm install

# 启动服务
npm run dev:h5  # 启动 h5 开发服务
npm run dev:mp-weixin  # 启动微信小程序开发服务

# 打包
npm run build:h5  # 打包 h5 项目
npm run build:mp-weixin  # 打包微信小程序项目
```

## 项目结构

```
├─ src
│  ├─ App.vue                                 # 入口页面
│  ├─ components                              # 公共组件
│  │  └─ ZmTabs.vue
│  ├─ config
│  │  └─ env.host.ts                          # 环境配置文件
│  ├─ main.ts                                 # 入口文件
│  ├─ manifest.json                           # 小程序 manifest 文件
│  ├─ pages                                   # 主包目录
│  │  ├─ cart
│  │  │  └─ cart.vue
│  │  ├─ category
│  │  │  └─ category.vue
│  │  ├─ index
│  │  │  ├─ cpns
│  │  │  │  └─ CustomNavbar.vue
│  │  │  └─ index.vue
│  │  └─ my
│  │     └─ my.vue
│  ├─ pages.json                              # 页面配置文件
│  ├─ plugins                                 # 插件目录
│  │  ├─ index.ts
│  │  └─ uview-plugins                        # uview插件目录
│  │     └─ index.ts
│  ├─ services                                # 服务目录
│  │  └─ user.ts
│  ├─ static                                  # 静态资源目录
│  │  ├─ images
│  │  └─ tabs
│  │     ├─ cart_default.png
│  │     ├─ cart_selected.png
│  │     ├─ category_default.png
│  │     ├─ category_selected.png
│  │     ├─ home_default.png
│  │     ├─ home_selected.png
│  │     ├─ user_default.png
│  │     └─ user_selected.png
│  ├─ stores                                  # 状态管理目录
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ user.ts
│  ├─ subPackages                             # 子包目录
│  │  └─ login
│  │     └─ login.vue
│  ├─ types                                   # 类型声明目录
│  │  ├─ auto-components.d.ts
│  │  ├─ auto-imports.d.ts
│  │  ├─ components.d.ts
│  │  └─ env.d.ts
│  ├─ uni.scss                                # uni-app的全局scss样式文件
│  └─ utils
│     ├─ assets                               # 静态资源工具类
│     │  ├─ localAssetURL.ts                  # 本地资源URL工具文件
│     │  └─ remoteAssetsURL.ts                # 远程资源URL工具文件
│     ├─ http.ts                              # HTTP请求工具文件
│     ├─ uniModals.ts                         # 弹窗工具文件
│     └─ uniStorage.ts                        # 存储工具文件
├─ tsconfig.json                              # ts编译配置文件
├─ uno.config.ts                              # unocss配置文件
└─ vite.config.ts                             # vite配置文件

```

# 项目功能介绍

- ☀️ config/env.host.ts 环境配置文件，根据不同的环境变量，修改接口地址
- 🌙 plugins/uview-plus 集成 vue3 的最新 uview
- ⛵ store/user.ts 集成了 pinia，支持全局状态管理,使用组合式 API，支持响应式(也可以使用选项式 API，因人而异)，pinia-plugin-persistedstate 持久化存储。
- 🌐 utils/uniModals.ts 集成了 uniapp 的 modal 组件，支持弹窗
- 🗃 utils/uniStorage.ts 集成了 uniapp 的 storage 组件，支持本地存储
- ⛽ utils/http.ts 二次封装 uniapp 自带的请求库 响应拦截器
- 🌈 utils/assets/localAssetURL.ts 本地资源 URL 工具文件，支持本地资源 URL
- ✈️ utils/assets/remoteAssetsURL.ts 远程资源 URL 工具文件，支持远程资源 URL
- 🎨 uni.scss 集成了 uniapp 的全局 scss 样式文件，支持全局样式
- 🔐 main.js 中使用依赖注入全局使用（正常情况是使用的页面需要 import {inject} form vue, 但是使用了 unplugin-auto-import/vite 不要手动引入，直接在页面使用。
  > - app.provide('$useModal', useModal)
  > - app.provide('$useToast', useToast)
  > - app.provide('$useLoading', useLoading)
- 🔍 vite.config.ts
  > 1. 集成了 ViteAutoImport 自动导入模块，减少手动导入的工作
  > 2. unplugin-vue-components/vite components 目录下自动导入（其他需求自行配置）
  > 3. unocss/vite 原子 css 组件库

# 感谢您的支持！

感谢您使用我的开源项目，我们致力于提供高质量的代码和便捷的开发体验。如果您在使用过程中遇到任何问题、有任何建议或者希望贡献代码，都欢迎您通过以下方式联系我：

🐞 报告问题：如果您发现了 bug，或有任何改进建议，请在 [GitHub Issues]中提出，我将尽快处理。

🤝 贡献代码：我们欢迎开发者通过 [Pull Requests] 提交代码，一起改进项目。

🌐 联系我们：如果您有其他疑问或合作意向，可以通过 wx: zimoXueQianDuan 联系我。

再次感谢您的支持，希望我的项目能够对您的工作和学习有所帮助。祝您编码愉快！
