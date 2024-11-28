import { PropType } from 'vue'
import { PickerOption } from '@nutui/nutui-taro/dist/types/__VUE/picker/types'

export type Formatter = (type: string, option: PickerOption) => PickerOption
export type Filter = (columnType: string, options: PickerOption[]) => PickerOption[]

type OnChange = (v: any) => void
type FormatContent = (v: Date) => String

export type DatePickerBoxValue = Date | string | number

export const Props = {
	formatContent: Function as PropType<FormatContent>,
	onChange: Function as PropType<OnChange>,
	containerClass: String,
	placeholder: String,
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
		type: Array,
		default: [],
	},
	title: {
		type: String,
	},

	type: {
		type: String,
	},

	minuteStep: {
		type: Number,
	},
	minDate: {
		type: String,
	},
	maxDate: {
		type: String,
	},
	formatter: {
		type: Function as PropType<Formatter>,
	},
}
