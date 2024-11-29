import { PropType } from 'vue'
export declare const FixedTopBtn: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    containerClass: {
      type: StringConstructor
      default: string
    }
    zIndex: {
      type: NumberConstructor
      default: number
    }
    offsetStyle: {
      type: ObjectConstructor
      default: () => {
        right: string
        bottom: string
      }
    }
    onClick: PropType<() => void>
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
      containerClass: {
        type: StringConstructor
        default: string
      }
      zIndex: {
        type: NumberConstructor
        default: number
      }
      offsetStyle: {
        type: ObjectConstructor
        default: () => {
          right: string
          bottom: string
        }
      }
      onClick: PropType<() => void>
    }>
  > &
    Readonly<{}>,
  {
    zIndex: number
    containerClass: string
    offsetStyle: Record<string, any>
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
export default FixedTopBtn
