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
type onSearch = (keyword: string) => void
type onEnter = (keyword: string) => void
type onCancel = (keyword: string) => void
type onFilterConfirm = (filterValue: any) => void
export declare const SearchBarProps: {
  containerClass: {
    type: StringConstructor
    default: string
  }
  value: {
    type: StringConstructor
  }
  autofocus: {
    type: BooleanConstructor
    default: boolean
  }
  placeholder: {
    type: StringConstructor
    default: string
  }
  cancelText: {
    type: StringConstructor
    default: string
  }
  filters: PropType<Filter[]>
  onSearch: PropType<onSearch>
  onEnter: PropType<onEnter>
  onCancel: PropType<onCancel>
  onFilterConfirm: PropType<onFilterConfirm>
}
export {}
