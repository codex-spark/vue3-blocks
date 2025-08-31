# Vue3 Blocks

一个基于 Vue 3 + TypeScript + Vite + Element Plus 的现代化前端项目。

## 项目特性

- 🚀 使用 [Vue 3](https://vuejs.org/) 和 [Vite](https://vitejs.dev/) 构建
- 💪 使用 [TypeScript](https://www.typescriptlang.org/) 进行类型检查
- 🎨 集成 [Element Plus](https://element-plus.org/) UI组件库
- 📦 使用 [Pinia](https://pinia.vuejs.org/) 进行状态管理
- 🔍 ESLint + Prettier 代码规范和格式化
- 🛠️ Vue Router 路由管理
- 🔧 支持 Vue Devtools 开发调试工具

## 环境要求

- Node.js: ^20.19.0 || >=22.12.0
- 包管理器: npm / yarn / pnpm / bun

## 快速开始

1. 克隆项目

```bash
git clone [项目地址]
cd vue3-blocks
```

2. 安装依赖

```bash
npm install
# 或
yarn
# 或
pnpm install
# 或
bun install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

## 可用的命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 本地预览生产构建
- `npm run type-check` - 运行 TypeScript 类型检查
- `npm run lint` - 运行 ESLint 检查并修复问题
- `npm run format` - 使用 Prettier 格式化代码

## 项目结构

```
src/
  ├── assets/      # 静态资源
  ├── components/  # 公共组件
  ├── router/      # 路由配置
  ├── store/       # Pinia 状态管理
  ├── views/       # 页面组件
  ├── App.vue      # 根组件
  └── main.ts      # 应用入口
```

## 技术栈

- Vue 3.5.18
- TypeScript 5.8.0
- Vite 7.0.6
- Vue Router 4.5.1
- Pinia 3.0.3
- Element Plus 2.11.1
- ESLint 9.31.0
- Prettier 3.6.2

## 开发工具推荐

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- 请禁用 Vetur 插件以避免冲突

## TypeScript Vue 类型支持

TypeScript 默认不能处理 `.vue` 导入的类型信息，因此我们使用 `vue-tsc` 替代 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来使 TypeScript 语言服务能够识别 `.vue` 类型。

## 自定义配置

查看 [Vite 配置参考](https://vitejs.dev/config/) 了解更多配置选项。

## License

[MIT License](LICENSE)
