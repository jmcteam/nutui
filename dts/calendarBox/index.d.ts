export declare const CalendarBox: import('vue').DefineComponent<
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
      type: ArrayConstructor
      default: never[]
    }
    title: {
      type: StringConstructor
    }
    type: {
      type: StringConstructor
    }
    minuteStep: {
      type: NumberConstructor
    }
    minDate: {
      type: StringConstructor
    }
    maxDate: {
      type: StringConstructor
    }
    formatter: {
      type: import('vue').PropType<import('./types').Formatter>
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
        type: ArrayConstructor
        default: never[]
      }
      title: {
        type: StringConstructor
      }
      type: {
        type: StringConstructor
      }
      minuteStep: {
        type: NumberConstructor
      }
      minDate: {
        type: StringConstructor
      }
      maxDate: {
        type: StringConstructor
      }
      formatter: {
        type: import('vue').PropType<import('./types').Formatter>
      }
    }>
  > &
    Readonly<{}>,
  {
    modelValue: unknown[]
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
export default CalendarBox
