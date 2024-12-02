import { defineComponent } from 'vue'
import PageDemo from '../../../packages/datePickerBox/demo/index'
import { View } from '@tarojs/components'
import Title from '../../components/title'

export default defineComponent({
  setup() {
    return () => {
      return (
        <View>
          <Title title="datePickerBox 日期选择"></Title>
          <PageDemo></PageDemo>
        </View>
      )
    }
  },
})
