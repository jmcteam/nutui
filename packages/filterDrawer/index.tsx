import { View, ScrollView } from '@tarojs/components'
import { Popup, Button } from '@nutui/nutui-taro'
import { defineComponent, onMounted, reactive } from 'vue'
import { FilterDrawerProps, Filter, Option, OptionValue } from './types'
import classNames from 'classnames'

export const FilterDrawer = defineComponent({
  name: 'filterDrawer',
  props: FilterDrawerProps,
  setup(props, { emit }) {
    const filterForm = reactive({})

    onMounted(() => {
      !!props.filters && resetFormValue()
    })

    const checkActive = (filter: Filter, option: Option) => {
      if (!filterForm[filter.key]) return false

      if (filter.type === 'radio') {
        return filterForm[filter.key] === option.value
      }

      if (filter.type === 'checkbox') {
        return filterForm[filter.key].includes(option.value)
      }
    }

    const changeFormValue = (
      filter: Filter,
      optionValue: OptionValue | OptionValue[],
    ) => {
      if (!filterForm[filter.key]) return

      if (filter.type === 'radio') {
        filterForm[filter.key] = optionValue
      }

      if (filter.type === 'checkbox') {
        const hasFlag = filterForm[filter.key].includes(optionValue)

        filterForm[filter.key] = hasFlag
          ? filterForm[filter.key].filter((v) => v !== optionValue)
          : [...filterForm[filter.key], optionValue]
      }
    }

    const resetFormValue = () => {
      if (!props.filters) return

      props.filters.forEach((filter) => {
        filterForm[filter.key] = filter.defaultValue
      })
    }

    return () => {
      const { drawerClass, visible, filters, position, onConfirm, ...rest } =
        props

      return (
        <Popup
          popClass={`components-filter-drawer ${drawerClass}`}
          visible={visible}
          position={position}
          closeable={false}
          round={false}
          safeAreaInsetBottom
          onUpdate:visible={(val) => emit('update:visible', val)}
          {...rest}
        >
          <ScrollView class="filter-content" scrollY showScrollbar={false}>
            {filters.map((filter) => (
              <View class="filter-item">
                <View class="filter-label">{filter.label}</View>
                <View class="filter-option">
                  {filter.options?.map((option) => (
                    <View
                      class={classNames({
                        'filter-option-item': true,
                        'checked-active': checkActive(filter, option),
                      })}
                      onClick={() => changeFormValue(filter, option.value)}
                    >
                      {option.label}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
          <View class="filter-operation">
            <Button
              type="primary"
              onClick={() => {
                onConfirm?.(filterForm)
                emit('update:visible', false)
              }}
            >
              确定
            </Button>
            <Button
              onClick={() => {
                resetFormValue()
                onConfirm?.(filterForm)
                emit('update:visible', false)
              }}
            >
              重置
            </Button>
          </View>
        </Popup>
      )
    }
  },
})

export default FilterDrawer
