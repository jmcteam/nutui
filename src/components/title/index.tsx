import { View } from '@tarojs/components'
import { defineComponent } from 'vue'
import './index.less'

export default defineComponent({
  name: 'p-title',
  props: {
    title: String,
  },
  setup(props) {
    return () => {
      const { title } = props
      return (
        <View>
          {process.env.TARO_ENV === 'h5' && (
            <View class="page-title">{title || '--'}</View>
          )}
        </View>
      )
    }
  },
})
