import { View, Text, Image } from '@tarojs/components'
import { defineComponent } from 'vue'

const COMMON_EMPTY_PLACEHOLDER2_IMG =
  'https://atgs-prod.oss-cn-hangzhou.aliyuncs.com/cloud/storage/weapp/empty_bg.png'

export const Empty = defineComponent({
  name: 'empty',
  props: {
    containerClass: {
      type: String,
      default: '',
    },
    tips: {
      type: String,
      default: '没有找到相关结果哦～',
    },
  },
  setup(props) {
    return () => {
      const { containerClass, tips } = props

      return (
        <View class={`components-empty ${containerClass}`}>
          <View class="empty-img">
            <Image src={COMMON_EMPTY_PLACEHOLDER2_IMG} mode="widthFix" />
          </View>
          <Text class="empty-tips">{tips}</Text>
        </View>
      )
    }
  },
})

export default Empty
