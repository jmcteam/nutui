import { View, Text } from '@tarojs/components'
import { Button } from '@nutui/nutui-taro'
import { defineComponent, ref, computed, onMounted } from 'vue'
import { CardProps, Cell } from './types'
import UploadFile from '../uploadFile'
import classNames from 'classnames'

export const Card = defineComponent({
  name: 'Card',
  props: CardProps,
  setup(props) {
    const expandNumber = ref(0)

    const useCollapse = computed(
      () =>
        !!props.minExpandNumber && props.minExpandNumber < props.cells.length,
    )

    const isExpanded = computed(() => props.cells.length <= expandNumber.value)

    onMounted(() => {
      if (useCollapse.value) {
        expandNumber.value = props.minExpandNumber as number
      }
    })

    return () => {
      const {
        containerClass,
        title,
        action,
        description,
        content,
        cells,
        operations,
      } = props

      const CellColumnTypes = ['file', 'custom']
      const isCellColumn = (cell: Cell) => {
        if (!cell.type) return false

        return CellColumnTypes.includes(cell.type)
      }

      const cellContentRender = (cell: Cell) => {
        let cellType = cell.type || 'text'

        if (cellType === 'text') return cell.value || '--'

        if (cellType === 'file')
          return <UploadFile fileList={cell.value} disabled />
      }

      const contentRender = () => {
        if (!!content) return content

        let filteredCells = useCollapse.value
          ? cells.filter((_, index) => expandNumber.value >= index + 1)
          : cells

        return (
          !!filteredCells?.length && (
            <>
              {filteredCells.map((cell) => (
                <>
                  <View
                    class={classNames({
                      'card-cell': true,
                      'card-cell-column': isCellColumn(cell),
                    })}
                  >
                    <View class="card-cell-label">{cell.label}</View>
                    <View class="card-cell-value">
                      {cellContentRender(cell)}
                    </View>
                  </View>
                </>
              ))}
              {useCollapse.value && (
                <View class="card-collapse">
                  <View
                    class={classNames({
                      'card-collapse-btn': true,
                      'card-collapse-expanded': isExpanded.value,
                    })}
                    onClick={() => {
                      if (isExpanded.value) {
                        expandNumber.value = props.minExpandNumber!
                      } else {
                        expandNumber.value = cells.length
                      }
                    }}
                  >
                    {isExpanded.value ? '收起' : '展开'}
                    <Text class="jmc-nut-icon jmc-nut-icon-xiajiantou card-collapse-icon" />
                  </View>
                </View>
              )}
            </>
          )
        )
      }

      return (
        <View class={`components-card ${containerClass}`}>
          <View class="card-header">
            <View class="card-title">
              <View class="card-title-content">{title}</View>
              <View class="card-action">{action}</View>
            </View>
            {description && <View class="card-description">{description}</View>}
          </View>
          <View class="card-body">{contentRender()}</View>

          {!!operations?.length && (
            <View class="card-footer">
              {operations
                .filter((operation) => operation.show)
                .map(({ text, ...rest }) => (
                  <Button {...rest}>{text}</Button>
                ))}
            </View>
          )}
        </View>
      )
    }
  },
})

export default Card
