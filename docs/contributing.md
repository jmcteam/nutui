### 贡献指南

这篇指南会指导你如何为 vantui 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南

### Bugs

我们使用 GitHub Issues 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，按照给定的[issue 模板](https://github.com/AntmJS/vantui/issues/new?assignees=&labels=&template=BUG.md)，向我们提供问题的复现过程、平台和环境等信息

### 新增功能

如果你有改进我们的 API 或者新增功能的想法， 按照给定的[issue 模板](https://github.com/AntmJS/vantui/issues/new?assignees=&labels=&template=FEATURE.md)，向我们提供具体的需求

### 快速开始

`yarn`安装所有依赖后

`yarn start`: 文档服务启动 （demo 修改后需要保存 readme 再回更新在线预览的文档服务）

> demo 服务暂时引用的源代码，代码构建`watch`模式的 scss 更新存在问题

### 组件和文档

- `packages/xx/index`源代码
- `packages/demo/demo1(xx)`单个案例
- `packages/demo/index`在 demo 代码`src`下面创建 xx 文件引用，并设置`app.config.js`的路由
- `antmjs.config.ts`下面设置文档菜单

> 注意事项 `vue的watch`方法在 h5 端初始化的时候不会执行

### TODO

1. 组件更新和文档同步
2. 组件关键样式变量用 css 变量
3. 组件 class 用`nutui-`前缀

### 在线文档构建

1. `yarn docs`: 输出`Entrypoints:app (xxx KiB)`后手动结束进程
2. `npx gh-pages -d doc_build`: 同步到文档服务分支

### 版本发布

1. `yarn build`: 忽略`DTS`的报错
2. `npm publish --tag beta`: 暂时手动发布，无日志
