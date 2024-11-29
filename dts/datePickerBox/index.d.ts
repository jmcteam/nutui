export declare const DatePickerBox: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    formatContent: import('vue').PropType<(v: Date) => String>
    onChange: import('vue').PropType<(v: any) => void>
    containerClass: StringConstructor
    placeholder: StringConstructor
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
    modelValue: {
      type: import('vue').PropType<import('./types').DatePickerBoxValue>
      default: null
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
    type: {
      type: StringConstructor
    }
    isShowChinese: {
      type: BooleanConstructor
      default: boolean
    }
    minuteStep: {
      type: NumberConstructor
    }
    minDate: {
      type: DateConstructor
    }
    maxDate: {
      type: DateConstructor
    }
    formatter: {
      type: import('vue').PropType<import('./types').Formatter>
    }
    threeDimensional: {
      type: BooleanConstructor
    }
    swipeDuration: {
      type: StringConstructor
      default: string
    }
    filter: import('vue').PropType<import('./types').Filter>
    showToolbar: {
      type: BooleanConstructor
    }
    visibleOptionNum: {
      type: StringConstructor
      default: string
    }
    optionHeight: {
      type: StringConstructor
      default: string
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
      formatContent: import('vue').PropType<(v: Date) => String>
      onChange: import('vue').PropType<(v: any) => void>
      containerClass: StringConstructor
      placeholder: StringConstructor
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
      modelValue: {
        type: import('vue').PropType<import('./types').DatePickerBoxValue>
        default: null
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
      type: {
        type: StringConstructor
      }
      isShowChinese: {
        type: BooleanConstructor
        default: boolean
      }
      minuteStep: {
        type: NumberConstructor
      }
      minDate: {
        type: DateConstructor
      }
      maxDate: {
        type: DateConstructor
      }
      formatter: {
        type: import('vue').PropType<import('./types').Formatter>
      }
      threeDimensional: {
        type: BooleanConstructor
      }
      swipeDuration: {
        type: StringConstructor
        default: string
      }
      filter: import('vue').PropType<import('./types').Filter>
      showToolbar: {
        type: BooleanConstructor
      }
      visibleOptionNum: {
        type: StringConstructor
        default: string
      }
      optionHeight: {
        type: StringConstructor
        default: string
      }
    }>
  > &
    Readonly<{}>,
  {
    modelValue: import('./types').DatePickerBoxValue
    isShowChinese: boolean
    threeDimensional: boolean
    swipeDuration: string
    showToolbar: boolean
    visibleOptionNum: string
    optionHeight: string
    allowClear: boolean
    showArrowLeft: boolean
    showArrowDown: boolean
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
export default DatePickerBox
