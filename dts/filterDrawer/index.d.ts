import { Filter } from './types'
export declare const FilterDrawer: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    drawerClass: {
      type: StringConstructor
      default: string
    }
    filters: {
      type: import('vue').PropType<Filter[]>
      default: () => never[]
    }
    visible: {
      type: BooleanConstructor
      default: boolean
    }
    position: {
      type: import('vue').PropType<'left' | 'right'>
      default: string
    }
    onConfirm: import('vue').PropType<(filterValue: any) => void>
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
      drawerClass: {
        type: StringConstructor
        default: string
      }
      filters: {
        type: import('vue').PropType<Filter[]>
        default: () => never[]
      }
      visible: {
        type: BooleanConstructor
        default: boolean
      }
      position: {
        type: import('vue').PropType<'left' | 'right'>
        default: string
      }
      onConfirm: import('vue').PropType<(filterValue: any) => void>
    }>
  > &
    Readonly<{}>,
  {
    position: 'left' | 'right'
    visible: boolean
    filters: Filter[]
    drawerClass: string
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
export default FilterDrawer
