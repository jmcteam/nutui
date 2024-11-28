import type { PropType, VNode } from 'vue'
import { View } from '@tarojs/components'
import { defineComponent } from 'vue'
import classNames from 'classnames'

export const SafeArea = defineComponent({
  name: 'safeArea',
  props: {
    children: Object as PropType<VNode | boolean | string | number>,
    position: {
      type: String as PropType<'top' | 'bottom' | 'both'>,
      default: 'both',
    },
  },
  setup(props) {
    return () => {
      const { position, children } = props

      return (
        <View
          class={classNames({
            'components-safe-area': true,
            'safe-area-top': position === 'both' || position === 'top',
            'safe-area-bottom': position === 'both' || position === 'bottom',
          })}
        >
          {children}
        </View>
      )
    }
  },
})

export default SafeArea
