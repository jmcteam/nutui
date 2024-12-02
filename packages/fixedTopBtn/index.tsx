import { View } from '@tarojs/components'
import { defineComponent, PropType } from 'vue'

export const FixedTopBtn = defineComponent({
  name: 'fixedTopBtn',
  props: {
    containerClass: {
      type: String,
      default: '',
    },
    zIndex: {
      type: Number,
      default: 1000,
    },
    offsetStyle: {
      type: Object,
      default: () => ({
        right: '20px',
        bottom: '20px',
      }),
    },
    onClick: Function as PropType<() => void>,
  },
  setup(props) {
    return () => {
      const { containerClass, zIndex, offsetStyle, onClick } = props

      return (
        <View
          class={`components-fixed-top-btn ${containerClass}`}
          style={{ zIndex, ...offsetStyle }}
          onClick={onClick}
        >
          <View class="jmc-nut-icon jmc-nut-icon-top top-icon"></View>
        </View>
      )
    }
  },
})

export default FixedTopBtn
