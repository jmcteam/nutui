import { PropType, VNode } from 'vue'
import type { ButtonProps } from '@nutui/nutui-taro'
type CellType = 'text' | 'file' | 'custom'
export type Cell = {
  type?: CellType
  label: string
  value: any
}
export type Operation = ButtonProps & {
  style?: Record<string, any>
  show: boolean
  text: string
  onClick?: (e: any) => void
}
export declare const CardProps: {
  containerClass: {
    type: StringConstructor
    default: string
  }
  title: {
    type: StringConstructor
    required: boolean
  }
  action: {
    type: PropType<any>
    default: null
  }
  description: {
    type: PropType<
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
    default: null
  }
  content: {
    type: PropType<
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
    default: null
  }
  cells: {
    type: PropType<Cell[]>
    default: () => never[]
  }
  minExpandNumber: {
    type: NumberConstructor
  }
  operations: {
    type: PropType<Operation[]>
    default: () => never[]
  }
}
export {}
