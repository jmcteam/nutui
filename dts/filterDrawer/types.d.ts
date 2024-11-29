import type { PropType } from 'vue'
export type OptionValue = string | number
export type Option = {
  label: string
  value: OptionValue
}
export type Filter = {
  type: 'radio' | 'checkbox'
  label: string
  key: string
  defaultValue: OptionValue | OptionValue[]
  options: Option[]
}
type onConfirm = (filterValue: any) => void
export declare const FilterDrawerProps: {
  drawerClass: {
    type: StringConstructor
    default: string
  }
  filters: {
    type: PropType<Filter[]>
    default: () => never[]
  }
  visible: {
    type: BooleanConstructor
    default: boolean
  }
  position: {
    type: PropType<'left' | 'right'>
    default: string
  }
  onConfirm: PropType<onConfirm>
}
export {}
