import { createApp } from 'vue'
import '@nutui/nutui-taro/dist/style.css'
// 暂时手动引用源码，scss热更新存在问题
import '../packages/style/iconfont.css'
import '../packages/style/index.scss'
import './app.less'

const App = createApp({
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
