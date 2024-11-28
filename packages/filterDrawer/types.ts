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

type onConfirm = (filterValue: any) => void

export const FilterDrawerProps = {
	drawerClass: {
		type: String,
		default: '',
	},
	filters: {
		type: Array as PropType<Filter[]>,
		default: () => [],
	},
	visible: {
		type: Boolean,
		default: false,
	},
	position: {
		type: String as PropType<'left' | 'right'>,
		default: 'right',
	},
	onConfirm: Function as PropType<onConfirm>,
}
