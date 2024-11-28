import { PropType } from 'vue'
import { PickerOption } from '@nutui/nutui-taro/dist/types/__VUE/picker/types'

type OnChange = (e: Array<string | number>) => void

export const PickerBoxProps = {
	placeholder: {
		type: String,
		default: '请选择',
	},
	containerClass: {
		type: String,
		default: '',
	},
	modelValue: {
		type: Array as PropType<(string | number)[] | (string | number)>,
		default: () => [],
	},
	title: {
		type: String,
		default: '',
	},
	cancelText: {
		type: String,
		default: '',
	},
	okText: {
		type: String,
		default: '',
	},
	columns: {
		type: Array as PropType<(PickerOption | PickerOption[])[]>,
		default: () => [],
	},
	visibleOptionNum: {
		type: String,
		default: '7',
	},
	optionHeight: {
		type: String,
		default: '36',
	},
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
	labelName: {
		type: String,
		default: 'name',
	},
	fieldName: {
		type: String,
		default: 'id',
	},
	onChange: {
		type: Function as PropType<OnChange>,
		default: undefined,
	},
}
