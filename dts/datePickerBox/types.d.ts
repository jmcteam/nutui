import { PropType } from 'vue'
import { PickerOption } from '@nutui/nutui-taro/dist/types/__VUE/picker/types'
export type Formatter = (type: string, option: PickerOption) => PickerOption
export type Filter = (
  columnType: string,
  options: PickerOption[],
) => PickerOption[]
type OnChange = (v: any) => void
type FormatContent = (v: Date) => String
export type DatePickerBoxValue = Date | string | number
export declare const Props: {
  formatContent: PropType<FormatContent>
  onChange: PropType<OnChange>
  containerClass: StringConstructor
  placeholder: StringConstructor
  allowClear: {
    type: BooleanConstructor
    default: boolean
  }
  showArrowLeft: {
    type: BooleanConstructor
    default: boolean
  }
  showArrowDown: {
    type: BooleanConstructor
    default: boolean
  }
  modelValue: {
    type: PropType<DatePickerBoxValue>
    default: null
  }
  title: {
    type: StringConstructor
  }
  okText: {
    type: StringConstructor
  }
  cancelText: {
    type: StringConstructor
  }
  type: {
    type: StringConstructor
  }
  isShowChinese: {
    type: BooleanConstructor
    default: boolean
  }
  minuteStep: {
    type: NumberConstructor
  }
  minDate: {
    type: DateConstructor
  }
  maxDate: {
    type: DateConstructor
  }
  formatter: {
    type: PropType<Formatter>
  }
  threeDimensional: {
    type: BooleanConstructor
  }
  swipeDuration: {
    type: StringConstructor
    default: string
  }
  filter: PropType<Filter>
  showToolbar: {
    type: BooleanConstructor
  }
  visibleOptionNum: {
    type: StringConstructor
    default: string
  }
  optionHeight: {
    type: StringConstructor
    default: string
  }
}
export {}
