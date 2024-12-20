import { defineComponent } from 'vue'
import PageDemo from '../../../packages/checkList/demo/index'
import { View } from '@tarojs/components'
import Title from '../../components/title'

export default defineComponent({
  setup() {
    return () => {
      return (
        <View>
          <Title title="checkeList 勾选列表"></Title>
          <PageDemo></PageDemo>
        </View>
      )
    }
  },
})
