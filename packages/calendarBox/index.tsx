import { View } from '@tarojs/components'
import { computed, defineComponent, ref, watch } from 'vue'
import { Calendar } from '@nutui/nutui-taro'
import { Props } from './types'
import classNames from 'classnames'
import dayjs from 'dayjs'

export const CalendarBox = defineComponent({
  name: 'calendarBox',
  props: Props,
  setup(props, { emit }) {
    const show = ref(false)
    const pickerValue = ref<Date[] | undefined>(undefined)

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          // @ts-ignore
          pickerValue.value = props.modelValue
        } else {
          pickerValue.value = []
        }
      },
    )

    const curContent = computed(() => {
      if (Array.isArray(pickerValue.value) && pickerValue.value.length > 0) {
        if (props.formatContent) {
          return [
            props.formatContent(pickerValue.value[0]!),
            props.formatContent(pickerValue.value[1]!),
          ]
        }

        return [
          dayjs(pickerValue.value[0]).format('YYYY-MM-DD'),
          dayjs(pickerValue.value[1]).format('YYYY-MM-DD'),
        ]
      } else {
        return ''
      }
    })

    const clear = () => {
      emit('update:modelValue', [])
      props.onChange?.([])
      pickerValue.value = []
    }

    const onSelect = () => {
      props.onChange?.(pickerValue.value)
      emit('update:modelValue', pickerValue)
      show.value = false
    }

    return () => {
      const {
        containerClass,
        placeholder,
        allowClear,
        showArrowDown,
        showArrowLeft,
        title,
        minDate = '2024-01-01',
        maxDate,
        type,
      } = props

      return (
        <View class={`components-date-picker-box ${containerClass}`}>
          <View
            class={classNames({
              'picker-box-content': true,
              'picker-box-content-placeholder': curContent.value === '',
            })}
            onClick={() => (show.value = true)}
          >
            {Array.isArray(curContent.value) && curContent.value.length == 2
              ? curContent.value.join(' -- ')
              : placeholder}
          </View>
          {allowClear && curContent.value && (
            <View
              class="jmc-icon jmc-icon-clear clear-box"
              onClick={clear}
            ></View>
          )}
          {showArrowDown && (
            <View
              onClick={() => (show.value = true)}
              class="jmc-icon jmc-icon-xiajiantou components-picker-box-arrow"
            ></View>
          )}
          {showArrowLeft && (
            <View
              onClick={() => (show.value = true)}
              class="jmc-icon jmc-icon-youjiantou components-picker-box-arrow"
            ></View>
          )}

          <Calendar
            v-model:visible={show.value}
            type={type}
            startDate={minDate}
            endDate={maxDate}
            title={title}
            v-model={pickerValue.value}
            showToday={true}
            onChoose={(params) => {
              pickerValue.value = [params[0][3], params[1][3]]
              onSelect()
            }}
            onClose={() => {
              show.value = false
            }}
          ></Calendar>
        </View>
      )
    }
  },
})

export default CalendarBox
