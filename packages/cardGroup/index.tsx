import { View } from '@tarojs/components'
import { defineComponent } from 'vue'
import { CardProps } from '../card/types'

export const CardGroup = defineComponent({
  name: 'Card',
  props: CardProps,
  setup(props, { slots }) {
    return () => {
      const { containerClass } = props

      const childs = slots['default']?.()
      if (!childs) return

      const cardChilds = childs.filter(
        (child) => child.type?.['name'] === 'Card',
      )
      return (
        <View class={`components-card-group ${containerClass}`}>
          {cardChilds.map((card) => (
            <View class="card-group-item">{card}</View>
          ))}
        </View>
      )
    }
  },
})

export default CardGroup
