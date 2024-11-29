import type { PickerOption } from '@nutui/nutui-taro/dist/types/__VUE/picker/types'
export declare const PickerBox: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    placeholder: {
      type: StringConstructor
      default: string
    }
    containerClass: {
      type: StringConstructor
      default: string
    }
    modelValue: {
      type: import('vue').PropType<string | number | (string | number)[]>
      default: () => never[]
    }
    title: {
      type: StringConstructor
      default: string
    }
    cancelText: {
      type: StringConstructor
      default: string
    }
    okText: {
      type: StringConstructor
      default: string
    }
    columns: {
      type: import('vue').PropType<(PickerOption | PickerOption[])[]>
      default: () => never[]
    }
    visibleOptionNum: {
      type: StringConstructor
      default: string
    }
    optionHeight: {
      type: StringConstructor
      default: string
    }
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
    labelName: {
      type: StringConstructor
      default: string
    }
    fieldName: {
      type: StringConstructor
      default: string
    }
    onChange: {
      type: import('vue').PropType<(e: (string | number)[]) => void>
      default: undefined
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
      placeholder: {
        type: StringConstructor
        default: string
      }
      containerClass: {
        type: StringConstructor
        default: string
      }
      modelValue: {
        type: import('vue').PropType<string | number | (string | number)[]>
        default: () => never[]
      }
      title: {
        type: StringConstructor
        default: string
      }
      cancelText: {
        type: StringConstructor
        default: string
      }
      okText: {
        type: StringConstructor
        default: string
      }
      columns: {
        type: import('vue').PropType<(PickerOption | PickerOption[])[]>
        default: () => never[]
      }
      visibleOptionNum: {
        type: StringConstructor
        default: string
      }
      optionHeight: {
        type: StringConstructor
        default: string
      }
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
      labelName: {
        type: StringConstructor
        default: string
      }
      fieldName: {
        type: StringConstructor
        default: string
      }
      onChange: {
        type: import('vue').PropType<(e: (string | number)[]) => void>
        default: undefined
      }
    }>
  > &
    Readonly<{}>,
  {
    columns: (PickerOption | PickerOption[])[]
    title: string
    onChange: (e: (string | number)[]) => void
    placeholder: string
    modelValue: string | number | (string | number)[]
    okText: string
    cancelText: string
    visibleOptionNum: string
    optionHeight: string
    containerClass: string
    allowClear: boolean
    showArrowLeft: boolean
    showArrowDown: boolean
    labelName: string
    fieldName: string
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
export default PickerBox
