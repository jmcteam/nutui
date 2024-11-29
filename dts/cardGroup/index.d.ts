export declare const CardGroup: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    containerClass: {
      type: StringConstructor
      default: string
    }
    title: {
      type: StringConstructor
      required: boolean
    }
    action: {
      type: import('vue').PropType<any>
      default: null
    }
    description: {
      type: import('vue').PropType<
        | string
        | number
        | boolean
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
      >
      default: null
    }
    content: {
      type: import('vue').PropType<
        | string
        | number
        | boolean
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
      >
      default: null
    }
    cells: {
      type: import('vue').PropType<import('../card/types').Cell[]>
      default: () => never[]
    }
    minExpandNumber: {
      type: NumberConstructor
    }
    operations: {
      type: import('vue').PropType<import('../card/types').Operation[]>
      default: () => never[]
    }
  }>,
  () => import('vue/jsx-runtime').JSX.Element | undefined,
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
      title: {
        type: StringConstructor
        required: boolean
      }
      action: {
        type: import('vue').PropType<any>
        default: null
      }
      description: {
        type: import('vue').PropType<
          | string
          | number
          | boolean
          | import('vue').VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                [key: string]: any
              }
            >
        >
        default: null
      }
      content: {
        type: import('vue').PropType<
          | string
          | number
          | boolean
          | import('vue').VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                [key: string]: any
              }
            >
        >
        default: null
      }
      cells: {
        type: import('vue').PropType<import('../card/types').Cell[]>
        default: () => never[]
      }
      minExpandNumber: {
        type: NumberConstructor
      }
      operations: {
        type: import('vue').PropType<import('../card/types').Operation[]>
        default: () => never[]
      }
    }>
  > &
    Readonly<{}>,
  {
    content:
      | string
      | number
      | boolean
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
    action: any
    description:
      | string
      | number
      | boolean
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
    containerClass: string
    cells: import('../card/types').Cell[]
    operations: import('../card/types').Operation[]
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
export default CardGroup
