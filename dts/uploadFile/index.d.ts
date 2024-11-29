import { PropType } from 'vue'
export declare const UploadFile: import('vue').DefineComponent<
  import('vue').ExtractPropTypes<{
    onClear: FunctionConstructor
    containerClass: StringConstructor
    createHeader: FunctionConstructor
    queryAttachUrls: FunctionConstructor
    target: {
      type: ObjectConstructor
      default: () => {
        key: string
        bizKey: string
      }
    }
    headers: {
      type: ObjectConstructor
      default: () => {}
    }
    name: {
      type: StringConstructor
      default: string
    }
    url: {
      type: StringConstructor
      default: string
    }
    formData: {
      type: ObjectConstructor
      default: () => {}
    }
    sizeType: {
      type: PropType<('original' | 'compressed')[]>
      default: () => string[]
    }
    sourceType: {
      type: PropType<('camera' | 'album')[]>
      default: () => string[]
    }
    mode: {
      type: StringConstructor
      default: string
    }
    needPreview: {
      type: BooleanConstructor
      default: boolean
    }
    maximum: {
      type: NumberConstructor
      default: number
    }
    fileList: {
      type: ArrayConstructor
      default: () => never[]
    }
    onSuccess: {
      type: FunctionConstructor
    }
    onChange: {
      type: FunctionConstructor
    }
    isPreview: {
      type: BooleanConstructor
      default: boolean
    }
    disabled: {
      type: BooleanConstructor
      default: boolean
    }
    maxSize: {
      type: NumberConstructor
      default: number
    }
    tips: {
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
      onClear: FunctionConstructor
      containerClass: StringConstructor
      createHeader: FunctionConstructor
      queryAttachUrls: FunctionConstructor
      target: {
        type: ObjectConstructor
        default: () => {
          key: string
          bizKey: string
        }
      }
      headers: {
        type: ObjectConstructor
        default: () => {}
      }
      name: {
        type: StringConstructor
        default: string
      }
      url: {
        type: StringConstructor
        default: string
      }
      formData: {
        type: ObjectConstructor
        default: () => {}
      }
      sizeType: {
        type: PropType<('original' | 'compressed')[]>
        default: () => string[]
      }
      sourceType: {
        type: PropType<('camera' | 'album')[]>
        default: () => string[]
      }
      mode: {
        type: StringConstructor
        default: string
      }
      needPreview: {
        type: BooleanConstructor
        default: boolean
      }
      maximum: {
        type: NumberConstructor
        default: number
      }
      fileList: {
        type: ArrayConstructor
        default: () => never[]
      }
      onSuccess: {
        type: FunctionConstructor
      }
      onChange: {
        type: FunctionConstructor
      }
      isPreview: {
        type: BooleanConstructor
        default: boolean
      }
      disabled: {
        type: BooleanConstructor
        default: boolean
      }
      maxSize: {
        type: NumberConstructor
        default: number
      }
      tips: {
        type: StringConstructor
        default: string
      }
    }>
  > &
    Readonly<{}>,
  {
    formData: Record<string, any>
    url: string
    name: string
    target: Record<string, any>
    disabled: boolean
    mode: string
    maximum: number
    headers: Record<string, any>
    sourceType: ('camera' | 'album')[]
    fileList: unknown[]
    tips: string
    sizeType: ('original' | 'compressed')[]
    isPreview: boolean
    needPreview: boolean
    maxSize: number
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
export default UploadFile
