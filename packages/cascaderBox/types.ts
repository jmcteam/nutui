import { CascaderOption } from '@nutui/nutui-taro/dist/types/__VUE/cascader/types'
import { PropType } from 'vue'

type OnChange = (value?: (string | number)[], option?: CascaderOption) => void
type FormatContent = (value?: (number | string)[]) => string

export const CascaderProps = {
	containerClass: String,
	formatContent: Function as PropType<FormatContent>,
	placeholder: String,
	onChange: Function as PropType<OnChange>,
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
	title: {
		type: String,
	},
	okText: {
		type: String,
	},
	cancelText: {
		type: String,
	},
	modelValue: Array as PropType<(number | string)[]>,
	visible: Boolean,
	options: {
		type: Array as PropType<CascaderOption[]>,
		default: [],
	},
	lazy: Boolean,
	lazyLoad: Function,
	valueKey: {
		type: String,
	},
	textKey: {
		type: String,
	},
	childrenKey: {
		type: String,
	},
	poppable: {
		type: Boolean,
	},
	convertConfig: Object,
	zIndex: {
		type: Number,
	},
	duration: {
		type: Number,
	},
	lockScroll: {
		type: Boolean,
	},
	closeOnClickOverlay: {
		type: Boolean,
	},
	transition: {
		type: String,
	},
	style: {
		type: Object,
		default: () => {},
	},
	popClass: {
		type: String,
	},
	closeable: {
		type: Boolean,
	},
	destroyOnClose: {
		type: Boolean,
	},
	overlay: {
		type: Boolean,
	},
	round: {
		type: Boolean,
	},
	teleportDisable: {
		type: Boolean,
	},
	safeAreaInsetBottom: {
		type: Boolean,
	},
	overlayClass: {
		type: String,
	},
	overlayStyle: {
		type: Object,
		default: () => {},
	},
}
