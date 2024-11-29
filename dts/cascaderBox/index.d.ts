export declare const CascaderBox: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    containerClass: StringConstructor
    formatContent: import('vue').PropType<
      (value?: (string | number)[] | undefined) => string
    >
    placeholder: StringConstructor
    onChange: import('vue').PropType<
      (
        value?: (string | number)[] | undefined,
        option?:
          | import('@nutui/nutui-taro/dist/types/__VUE/cascader/types').CascaderOption
          | undefined,
      ) => void
    >
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
    modelValue: import('vue').PropType<(string | number)[]>
    visible: BooleanConstructor
    options: {
      type: import('vue').PropType<
        import('@nutui/nutui-taro/dist/types/__VUE/cascader/types').CascaderOption[]
      >
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
      containerClass: StringConstructor
      formatContent: import('vue').PropType<
        (value?: (string | number)[] | undefined) => string
      >
      placeholder: StringConstructor
      onChange: import('vue').PropType<
        (
          value?: (string | number)[] | undefined,
          option?:
            | import('@nutui/nutui-taro/dist/types/__VUE/cascader/types').CascaderOption
            | undefined,
        ) => void
      >
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
      modelValue: import('vue').PropType<(string | number)[]>
      visible: BooleanConstructor
      options: {
        type: import('vue').PropType<
          import('@nutui/nutui-taro/dist/types/__VUE/cascader/types').CascaderOption[]
        >
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
    }>
  > &
    Readonly<{}>,
  {
    overlay: boolean
    round: boolean
    visible: boolean
    style: Record<string, any>
    lazy: boolean
    options: import('@nutui/nutui-taro/dist/types/__VUE/cascader/types').CascaderOption[]
    overlayStyle: Record<string, any>
    lockScroll: boolean
    closeOnClickOverlay: boolean
    closeable: boolean
    destroyOnClose: boolean
    teleportDisable: boolean
    safeAreaInsetBottom: boolean
    poppable: boolean
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
export default CascaderBox
