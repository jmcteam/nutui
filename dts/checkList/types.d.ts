import { PropType } from 'vue'
export interface ResponseType<T> {
  code: number
  message?: string
  data?: T
  result?: T
}
type OnChange = (
  e: Array<string | number>,
  d: Array<Record<string, any>>,
) => void
type SearchData = (keyWord?: string) => Promise<IData | ResponseType<IData>>
export type CheckListEmits = {
  onChange: [
    {
      detail: Array<string | number>
    },
    Array<Record<string, any>>,
  ]
  searchData: [string]
}
type IData = {
  id: number | string
  name: string
}[]
export declare const CheckListProps: {
  /**
   * 虚拟列表开启
   */
  virtualList: BooleanConstructor
  /**
   * @description 搜索输入时是否开启异步请求搜索
   */
  searchSync: BooleanConstructor
  /**
   * @description 默认是flex-end布局，是否开启flexStart
   * @default false
   */
  flexStart: BooleanConstructor
  containerClass: {
    type: StringConstructor
    default: string
    required: boolean
  }
  searchAsync: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  placeholder: {
    type: StringConstructor
    default: string
    required: boolean
  }
  placeholderColor: {
    type: StringConstructor
    default: string
    required: boolean
  }
  searchPlaceholder: {
    type: StringConstructor
    default: string
    required: boolean
  }
  data: {
    type: PropType<IData>
    default: never[]
    required: boolean
  }
  modelValue: {
    type: {
      (arrayLength: number): (String | Number)[]
      (...items: (String | Number)[]): (String | Number)[]
      new (arrayLength: number): (String | Number)[]
      new (...items: (String | Number)[]): (String | Number)[]
      isArray(arg: any): arg is any[]
      readonly prototype: any[]
      from<T>(arrayLike: ArrayLike<T>): T[]
      from<T_1, U>(
        arrayLike: ArrayLike<T_1>,
        mapfn: (v: T_1, k: number) => U,
        thisArg?: any,
      ): U[]
      from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[]
      from<T_3, U_1>(
        iterable: Iterable<T_3> | ArrayLike<T_3>,
        mapfn: (v: T_3, k: number) => U_1,
        thisArg?: any,
      ): U_1[]
      of<T_4>(...items: T_4[]): T_4[]
      readonly [Symbol.species]: ArrayConstructor
    }
    default: never[]
    required: boolean
  }
  checkAll: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  onChange: {
    type: PropType<OnChange>
    default: undefined
    required: boolean
  }
  limit: {
    type: NumberConstructor
    default: number
    required: boolean
  }
  labelName: {
    type: StringConstructor
    default: string
    required: boolean
  }
  optionsLabelName: {
    type: StringConstructor
    default: string
    required: boolean
  }
  fieldName: {
    type: StringConstructor
    default: string
    required: boolean
  }
  bodyHeight: {
    type: StringConstructor
    default: string
    required: boolean
  }
  showArrowDown: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  showArrowLeft: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  searchShow: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  searchLoading: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  allowClear: {
    type: BooleanConstructor
    default: boolean
    required: boolean
  }
  searchData: {
    type: PropType<SearchData>
    default: undefined
    required: boolean
  }
  checkType: {
    type: StringConstructor
    default: string
  }
  mode: {
    type: PropType<'multiple' | 'single'>
    default: string
  }
  disabled: {
    type: BooleanConstructor
    default: boolean
  }
}
export {}
