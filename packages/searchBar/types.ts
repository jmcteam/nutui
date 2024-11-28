import type { PropType } from 'vue'

export type OptionValue = string | number
export type Option = { label: string; value: OptionValue }
export type Filter = {
	type: 'radio' | 'checkbox'
	label: string
	key: string
	defaultValue: OptionValue | OptionValue[]
	options: Option[]
}

type onSearch = (keyword: string) => void
type onEnter = (keyword: string) => void
type onCancel = (keyword: string) => void
type onFilterConfirm = (filterValue: any) => void

export const SearchBarProps = {
	containerClass: {
		type: String,
		default: '',
	},
	value: {
		type: String,
	},
	autofocus: {
		type: Boolean,
		default: false,
	},
	placeholder: {
		type: String,
		default: '请输入关键词',
	},
	cancelText: {
		type: String,
		default: '取消',
	},
	filters: Array as PropType<Filter[]>,
	onSearch: Function as PropType<onSearch>,
	onEnter: Function as PropType<onEnter>,
	onCancel: Function as PropType<onCancel>,
	onFilterConfirm: Function as PropType<onFilterConfirm>,
}
