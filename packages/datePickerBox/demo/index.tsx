import Demo1 from './demo1'
import Block from '../../../src/components/block'
import { defineComponent } from 'vue'
import { View } from '@tarojs/components'
import '../index.scss'

export default defineComponent({
  setup() {
    return () => (
      <View>
        <Block title="基础使用">
          <Demo1></Demo1>
        </Block>
      </View>
    )
  },
})
