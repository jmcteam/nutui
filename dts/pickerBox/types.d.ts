import { PropType } from 'vue'
import { PickerOption } from '@nutui/nutui-taro/dist/types/__VUE/picker/types'
type OnChange = (e: Array<string | number>) => void
export declare const PickerBoxProps: {
  placeholder: {
    type: StringConstructor
    default: string
  }
  containerClass: {
    type: StringConstructor
    default: string
  }
  modelValue: {
    type: PropType<string | number | (string | number)[]>
    default: () => never[]
  }
  title: {
    type: StringConstructor
    default: string
  }
  cancelText: {
    type: StringConstructor
    default: string
  }
  okText: {
    type: StringConstructor
    default: string
  }
  columns: {
    type: PropType<(PickerOption | PickerOption[])[]>
    default: () => never[]
  }
  visibleOptionNum: {
    type: StringConstructor
    default: string
  }
  optionHeight: {
    type: StringConstructor
    default: string
  }
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
  labelName: {
    type: StringConstructor
    default: string
  }
  fieldName: {
    type: StringConstructor
    default: string
  }
  onChange: {
    type: PropType<OnChange>
    default: undefined
  }
}
export {}
