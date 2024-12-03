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

export const Props = {
  formatContent: Function as PropType<FormatContent>,
  onChange: Function as PropType<OnChange>,
  containerClass: String,
  placeholder: String,
  flexStart: Boolean,
  allowClear: {
    type: Boolean,
    default: true,
  },
  showArrowLeft: {
    type: Boolean,
    default: false,
  },
  showArrowDown: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Date as PropType<DatePickerBoxValue>,
    default: null,
  },
  title: {
    type: String,
  },
  okText: {
    type: String,
  },
  cancelText: {
    type: String,
  },
  type: {
    type: String as PropType<
      'date' | 'year-month' | 'month-day' | 'datehour' | 'hour-minute' | 'time'
    >,
    default: 'date',
  },
  isShowChinese: {
    type: Boolean,
    default: true,
  },
  minuteStep: {
    type: Number,
  },
  minDate: {
    type: Date,
  },
  maxDate: {
    type: Date,
  },
  formatter: {
    type: Function as PropType<Formatter>,
  },
  threeDimensional: {
    type: Boolean,
  },
  swipeDuration: {
    type: String,
    default: '1000',
  },
  filter: Function as PropType<Filter>,
  showToolbar: {
    type: Boolean,
  },
  visibleOptionNum: {
    type: String,
    default: '7',
  },
  optionHeight: {
    type: String,
    default: '36',
  },
}
