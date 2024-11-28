import { View } from '@tarojs/components'
import { computed, defineComponent, ref, watch } from 'vue'
import { Cascader } from '@nutui/nutui-taro'
import { CascaderProps } from './types'
import classNames from 'classnames'

export const CascaderBox = defineComponent({
  name: 'cascaderBox',
  props: CascaderProps,
  setup(props, { emit }) {
    const show = ref(false)
    const innerValue = ref<(string | number)[]>([])

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          innerValue.value = props.modelValue
        } else {
          innerValue.value = []
        }
      },
    )

    const curContent = computed(() => {
      if (innerValue.value && innerValue.value.length) {
        if (props.formatContent) {
          return props.formatContent()
        } else {
          let res: string[] = []
          let cur = props.options
          let keyName = props.valueKey || 'value'
          let labelKeyName = props.textKey || 'text'
          innerValue.value.map((it) => {
            cur?.map((cc) => {
              if (cc[keyName] === it) {
                res.push(cc[labelKeyName])
              }
              cur = cc[props.childrenKey || 'children'] || []
            })
          })
          return res.join('')
        }
      } else {
        return ''
      }
    })

    const clear = () => {
      emit('update:modelValue', [])
      props.onChange?.()
      innerValue.value = []
    }

    const handleChange = (value, option) => {
      innerValue.value = value
      emit('update:modelValue', value, option)
    }
    return () => {
      const {
        containerClass,
        placeholder,
        allowClear,
        showArrowDown,
        showArrowLeft,
        options,
        title,
        valueKey,
        textKey,
        lazy,
        lazyLoad,
        duration,
        lockScroll,
        overlayClass,
      } = props

      return (
        <View class={`components-cascader-box ${containerClass}`}>
          <View
            class={classNames({
              'cascader-box-content': true,
              'cascader-box-content-placeholder': !curContent.value?.length,
            })}
            onClick={() => (show.value = true)}
          >
            {curContent.value ? curContent.value : placeholder}
          </View>
          {allowClear && curContent.value && (
            <View
              class="jmc-icon jmc-icon-clear clear-box"
              onClick={clear}
            ></View>
          )}
          {showArrowDown && (
            <View
              onClick={() => (show.value = true)}
              class="jmc-icon jmc-icon-xiajiantou components-cascader-box-arrow"
            ></View>
          )}
          {showArrowLeft && (
            <View
              onClick={() => (show.value = true)}
              class="jmc-icon jmc-icon-youjiantou components-cascader-box-arrow"
            ></View>
          )}
          <Cascader
            v-model:visible={show.value}
            v-model={innerValue.value}
            onChange={handleChange}
            options={options as any}
            title={title}
            closeable
            valueKey={valueKey}
            textKey={textKey}
            lazy={lazy}
            lazyLoad={lazyLoad}
            duration={duration}
            lockScroll={lockScroll}
            overlayClass={`cascader-box-overlay ${overlayClass || ''}`}
          ></Cascader>
        </View>
      )
    }
  },
})

export default CascaderBox
