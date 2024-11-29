export declare const SearchBar: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    containerClass: {
      type: StringConstructor
      default: string
    }
    value: {
      type: StringConstructor
    }
    autofocus: {
      type: BooleanConstructor
      default: boolean
    }
    placeholder: {
      type: StringConstructor
      default: string
    }
    cancelText: {
      type: StringConstructor
      default: string
    }
    filters: import('vue').PropType<import('./types').Filter[]>
    onSearch: import('vue').PropType<(keyword: string) => void>
    onEnter: import('vue').PropType<(keyword: string) => void>
    onCancel: import('vue').PropType<(keyword: string) => void>
    onFilterConfirm: import('vue').PropType<(filterValue: any) => void>
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
      value: {
        type: StringConstructor
      }
      autofocus: {
        type: BooleanConstructor
        default: boolean
      }
      placeholder: {
        type: StringConstructor
        default: string
      }
      cancelText: {
        type: StringConstructor
        default: string
      }
      filters: import('vue').PropType<import('./types').Filter[]>
      onSearch: import('vue').PropType<(keyword: string) => void>
      onEnter: import('vue').PropType<(keyword: string) => void>
      onCancel: import('vue').PropType<(keyword: string) => void>
      onFilterConfirm: import('vue').PropType<(filterValue: any) => void>
    }>
  > &
    Readonly<{}>,
  {
    autofocus: boolean
    placeholder: string
    cancelText: string
    containerClass: string
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
export default SearchBar
