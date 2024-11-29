import { View } from '@tarojs/components'
import { computed, defineComponent, ref, watch } from 'vue'
import { Popup, DatePicker } from '@nutui/nutui-taro'
import { Props } from './types'
import classNames from 'classnames'
import dayjs from 'dayjs'

export const DatePickerBox = defineComponent({
  name: 'datePickerBox',
  props: Props,
  setup(props, { emit }) {
    const show = ref<boolean>(false)
    const innerValue = ref<Date | null>(null)
    const pickerValue = ref<Date | null>(null)

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          innerValue.value =
            props.modelValue instanceof Date
              ? props.modelValue
              : dayjs(props.modelValue).toDate()
        } else {
          innerValue.value = null
        }
      },
    )

    const curContent = computed(() => {
      if (innerValue.value) {
        if (props.type === 'date' || !props.type) {
          return dayjs(innerValue.value).format('YYYY-MM-DD')
        } else if (props.type === 'year-month') {
          return dayjs(innerValue.value).format('YYYY-MM')
        }
        if (props.type === 'datehour') {
          return dayjs(innerValue.value).format('YYYY-MM-DD HH')
        } else if (props.type === 'time') {
          return dayjs(innerValue.value).format('HH:mm:ss')
        } else if (props.type === 'month-day') {
          return dayjs(innerValue.value).format('MM-DD')
        }

        return ''
      } else {
        return ''
      }
    })

    const clear = () => {
      emit('update:modelValue', null)
      props.onChange?.([])
      innerValue.value = null
      pickerValue.value = null
    }

    watch(
      () => show.value,
      () => {
        if (show.value) {
          if (innerValue.value)
            pickerValue.value = new Date(innerValue.value.getTime())
        } else {
          pickerValue.value = null
        }
      },
    )

    const handleConfirm = () => {
      if (pickerValue.value)
        innerValue.value = new Date(pickerValue.value?.getTime())
      props.onChange?.(innerValue.value)
      emit('update:modelValue', innerValue)
      show.value = false
    }

    return () => {
      const {
        containerClass,
        placeholder,
        allowClear,
        showArrowDown,
        showArrowLeft,
        visibleOptionNum,
        okText,
        cancelText,
        optionHeight,
        title,
        minDate,
        maxDate,
        type,
        filter,
        isShowChinese,
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
            {curContent.value ? curContent.value : placeholder}
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

          <Popup
            v-model:visible={show.value}
            safeAreaInsetBottom
            position="bottom"
          >
            <DatePicker
              isShowChinese={isShowChinese}
              filter={filter}
              type={type}
              minDate={minDate}
              maxDate={maxDate}
              visibleOptionNum={visibleOptionNum}
              okText={okText}
              cancelText={cancelText}
              optionHeight={optionHeight}
              title={title}
              v-model={pickerValue.value}
              onConfirm={handleConfirm}
              onCancel={() => (show.value = false)}
            ></DatePicker>
          </Popup>
        </View>
      )
    }
  },
})

export default DatePickerBox
