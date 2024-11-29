import type { PropType, VNode } from 'vue'
export declare const SafeArea: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    children: PropType<
      | string
      | number
      | boolean
      | VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
    >
    position: {
      type: PropType<'both' | 'top' | 'bottom'>
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
      children: PropType<
        | string
        | number
        | boolean
        | VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
      >
      position: {
        type: PropType<'both' | 'top' | 'bottom'>
        default: string
      }
    }>
  > &
    Readonly<{}>,
  {
    position: 'both' | 'top' | 'bottom'
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
export default SafeArea
