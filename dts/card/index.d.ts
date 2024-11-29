import { Cell } from './types'
export declare const Card: import('vue').DefineComponent<
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
      type: import('vue').PropType<Cell[]>
      default: () => never[]
    }
    minExpandNumber: {
      type: NumberConstructor
    }
    operations: {
      type: import('vue').PropType<import('./types').Operation[]>
      default: () => never[]
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
        type: import('vue').PropType<Cell[]>
        default: () => never[]
      }
      minExpandNumber: {
        type: NumberConstructor
      }
      operations: {
        type: import('vue').PropType<import('./types').Operation[]>
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
    cells: Cell[]
    operations: import('./types').Operation[]
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
export default Card
