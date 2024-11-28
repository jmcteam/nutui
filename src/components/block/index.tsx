import { View } from '@tarojs/components'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'block',
  props: {
    className: String,
    title: String,
  },
  setup(props, ctx) {
    return () => {
      const { className, title } = props
      const children = ctx.slots['default']

      return (
        <View class={`code-block  ${className || ''}`}>
          <View class="title">{title}</View>
          <View class="demo">{children}</View>
        </View>
      )
    }
  },
})
