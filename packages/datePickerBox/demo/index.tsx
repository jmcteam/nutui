import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
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
        <Block title="年月选择">
          <Demo2></Demo2>
        </Block>
        <Block title="时分选择（bug）">
          <Demo3></Demo3>
        </Block>
      </View>
    )
  },
})
