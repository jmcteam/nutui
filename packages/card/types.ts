import { PropType, VNode } from 'vue'
import type { ButtonProps } from '@nutui/nutui-taro'

type CellType = 'text' | 'file' | 'custom'

export type Cell = { type?: CellType; label: string; value: any }

export type Operation = ButtonProps & {
	style?: Record<string, any>
	show: boolean
	text: string
	onClick?: (e: any) => void
}

export const CardProps = {
	containerClass: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		required: true,
	},
	action: {
		type: Function as PropType<any>,
		default: null,
	},
	description: {
		type: Object as PropType<VNode | boolean | string | number>,
		default: null,
	},
	content: {
		type: Object as PropType<VNode | boolean | string | number>,
		default: null,
	},
	cells: {
		type: Array as PropType<Cell[]>,
		default: () => [],
	},
	minExpandNumber: {
		type: Number,
	},
	operations: {
		type: Array as PropType<Operation[]>,
		default: () => [],
	},
}
