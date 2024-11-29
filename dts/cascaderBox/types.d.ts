import { CascaderOption } from '@nutui/nutui-taro/dist/types/__VUE/cascader/types'
import { PropType } from 'vue'
type OnChange = (value?: (string | number)[], option?: CascaderOption) => void
type FormatContent = (value?: (number | string)[]) => string
export declare const CascaderProps: {
  containerClass: StringConstructor
  formatContent: PropType<FormatContent>
  placeholder: StringConstructor
  onChange: PropType<OnChange>
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
  title: {
    type: StringConstructor
  }
  okText: {
    type: StringConstructor
  }
  cancelText: {
    type: StringConstructor
  }
  modelValue: PropType<(string | number)[]>
  visible: BooleanConstructor
  options: {
    type: PropType<CascaderOption[]>
    default: never[]
  }
  lazy: BooleanConstructor
  lazyLoad: FunctionConstructor
  valueKey: {
    type: StringConstructor
  }
  textKey: {
    type: StringConstructor
  }
  childrenKey: {
    type: StringConstructor
  }
  poppable: {
    type: BooleanConstructor
  }
  convertConfig: ObjectConstructor
  zIndex: {
    type: NumberConstructor
  }
  duration: {
    type: NumberConstructor
  }
  lockScroll: {
    type: BooleanConstructor
  }
  closeOnClickOverlay: {
    type: BooleanConstructor
  }
  transition: {
    type: StringConstructor
  }
  style: {
    type: ObjectConstructor
    default: () => void
  }
  popClass: {
    type: StringConstructor
  }
  closeable: {
    type: BooleanConstructor
  }
  destroyOnClose: {
    type: BooleanConstructor
  }
  overlay: {
    type: BooleanConstructor
  }
  round: {
    type: BooleanConstructor
  }
  teleportDisable: {
    type: BooleanConstructor
  }
  safeAreaInsetBottom: {
    type: BooleanConstructor
  }
  overlayClass: {
    type: StringConstructor
  }
  overlayStyle: {
    type: ObjectConstructor
    default: () => void
  }
}
export {}
