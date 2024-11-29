export declare const CheckList: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    virtualList: BooleanConstructor
    searchSync: BooleanConstructor
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
      type: import('vue').PropType<
        {
          id: string | number
          name: string
        }[]
      >
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
      type: import('vue').PropType<
        (e: (string | number)[], d: Record<string, any>[]) => void
      >
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
      type: import('vue').PropType<
        (keyWord?: string | undefined) => Promise<
          | {
              id: string | number
              name: string
            }[]
          | import('./types').ResponseType<
              {
                id: string | number
                name: string
              }[]
            >
        >
      >
      default: undefined
      required: boolean
    }
    checkType: {
      type: StringConstructor
      default: string
    }
    mode: {
      type: import('vue').PropType<'multiple' | 'single'>
      default: string
    }
    disabled: {
      type: BooleanConstructor
      default: boolean
    }
  }>,
  () => import('vue/jsx-runtime').JSX.Element,
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').PublicProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      virtualList: BooleanConstructor
      searchSync: BooleanConstructor
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
        type: import('vue').PropType<
          {
            id: string | number
            name: string
          }[]
        >
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
        type: import('vue').PropType<
          (e: (string | number)[], d: Record<string, any>[]) => void
        >
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
        type: import('vue').PropType<
          (keyWord?: string | undefined) => Promise<
            | {
                id: string | number
                name: string
              }[]
            | import('./types').ResponseType<
                {
                  id: string | number
                  name: string
                }[]
              >
          >
        >
        default: undefined
        required: boolean
      }
      checkType: {
        type: StringConstructor
        default: string
      }
      mode: {
        type: import('vue').PropType<'multiple' | 'single'>
        default: string
      }
      disabled: {
        type: BooleanConstructor
        default: boolean
      }
    }>
  > &
    Readonly<{}>,
  {
    data: {
      id: string | number
      name: string
    }[]
    disabled: boolean
    mode: 'multiple' | 'single'
    onChange: (e: (string | number)[], d: Record<string, any>[]) => void
    placeholder: string
    checkType: string
    modelValue: (String | Number)[]
    containerClass: string
    allowClear: boolean
    showArrowLeft: boolean
    showArrowDown: boolean
    virtualList: boolean
    searchSync: boolean
    flexStart: boolean
    searchAsync: boolean
    placeholderColor: string
    searchPlaceholder: string
    checkAll: boolean
    limit: number
    labelName: string
    optionsLabelName: string
    fieldName: string
    bodyHeight: string
    searchShow: boolean
    searchLoading: boolean
    searchData: (keyWord?: string | undefined) => Promise<
      | {
          id: string | number
          name: string
        }[]
      | import('./types').ResponseType<
          {
            id: string | number
            name: string
          }[]
        >
    >
  },
  {},
  {},
  {},
  string,
  import('vue').ComponentProvideOptions,
  true,
  {},
  any
>
export default CheckList
