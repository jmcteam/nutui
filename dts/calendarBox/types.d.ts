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
    type: ArrayConstructor
    default: never[]
  }
  title: {
    type: StringConstructor
  }
  type: {
    type: StringConstructor
  }
  minuteStep: {
    type: NumberConstructor
  }
  minDate: {
    type: StringConstructor
  }
  maxDate: {
    type: StringConstructor
  }
  formatter: {
    type: PropType<Formatter>
  }
}
export {}
