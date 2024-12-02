import { View } from '@tarojs/components'
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { Popup, Picker } from '@nutui/nutui-taro'
import type {
  PickerFieldNames,
  PickerOption,
} from '@nutui/nutui-taro/dist/types/__VUE/picker/types'
import { PickerBoxProps } from './types'
import classNames from 'classnames'

export const PickerBox = defineComponent({
  name: 'pickerBox',
  props: PickerBoxProps,
  setup(props, { emit }) {
    const show = ref(false)
    const innerValue = ref<(String | Number)[]>([])
    const pickerValue = ref<(String | Number)[]>([])
    const innerData = ref<PickerOption[][]>([])

    const fieldNames = computed(() => {
      const res: PickerFieldNames = {
        text: props.labelName,
        value: props.fieldName,
        children: 'children',
      }

      return res
    })

    watch(
      () => props.modelValue,
      () => {
        const pValue = props.modelValue
        innerValue.value = Array.isArray(pValue) ? pValue : [pValue]
      },
      {
        immediate: true,
      },
    )

    watch(
      () => props.columns,
      () => {
        const data = props.columns
        // @ts-ignore
        innerData.value = data[0] && Array.isArray(data[0]) ? data : [data]
      },
      {
        immediate: true,
      },
    )

    // 是否是children的多列级联结构
    const isChilrenModel = computed(() => {
      return innerData.value[0]?.[0]?.children
    })

    const curContent = computed(() => {
      const { labelName, fieldName } = props
      let content = ''
      if (innerValue.value) {
        if (!isChilrenModel.value) {
          innerValue.value.map((val, index) => {
            innerData.value?.[index]?.map((c) => {
              if (c && c[fieldName] === val) {
                content +=
                  c[labelName] +
                  (index === innerValue.value.length - 1 ? '' : ',')
              }
            })
          })
        } else {
          let colData = innerData.value[0]
          innerValue.value.map((val) => {
            colData?.map((c) => {
              if (c && c[fieldName] === val) {
                content += c[labelName] + (c.children?.length ? ',' : '')
                colData = c.children
              }
            })
          })
        }
      }

      return content
    })

    const updateValue = () => {
      const { fieldName } = props
      if (innerValue.value?.length) {
        pickerValue.value = [...innerValue.value]
      } else {
        let cur: (String | Number)[] = []
        if (isChilrenModel.value) {
          let colData = innerData.value[0]
          while (colData && colData?.length) {
            cur.push(colData[0]?.[fieldName])
            colData = colData[0]?.children
          }
        } else {
          cur = innerData.value.map((c) => {
            return c[0]?.[fieldName]
          })
        }
        pickerValue.value = cur
      }
    }

    watch(
      () => show.value,
      () => {
        if (show.value) {
          updateValue()
        } else {
          pickerValue.value = []
        }
      },
      {
        immediate: true,
      },
    )

    onMounted(() => {
      updateValue()
    })

    const handleConfirm = () => {
      innerValue.value = [...pickerValue.value]
      emit('update:modelValue', [...pickerValue.value])
      show.value = false
    }

    const clear = () => {
      emit('update:modelValue', [])
      props.onChange?.([])
      innerValue.value = []
      pickerValue.value = []
    }

    return () => {
      const {
        columns,
        visibleOptionNum,
        okText,
        cancelText,
        optionHeight,
        title,
        containerClass,
        placeholder,
        showArrowDown,
        showArrowLeft,
        allowClear,
      } = props

      return (
        <View class={`components-picker-box ${containerClass}`}>
          <View
            class={classNames({
              'picker-box-content': true,
              'picker-box-content-placeholder': curContent.value === '',
            })}
            onClick={() => (show.value = true)}
          >
            {curContent.value ? curContent.value : placeholder}
          </View>
          {allowClear && curContent.value && (
            <View
              class="jmc-nut-icon jmc-nut-icon-clear clear-box"
              onClick={clear}
            ></View>
          )}
          {showArrowDown && (
            <View
              onClick={() => (show.value = true)}
              class="jmc-nut-icon jmc-nut-icon-xiajiantou components-picker-box-arrow"
            ></View>
          )}
          {showArrowLeft && (
            <View
              onClick={() => (show.value = true)}
              class="jmc-nut-icon jmc-nut-icon-youjiantou components-picker-box-arrow"
            ></View>
          )}
          <Popup
            v-model:visible={show.value}
            safeAreaInsetBottom
            position="bottom"
          >
            <Picker
              visibleOptionNum={visibleOptionNum}
              columns={columns}
              okText={okText}
              cancelText={cancelText}
              optionHeight={optionHeight}
              title={title}
              fieldNames={fieldNames.value}
              v-model={pickerValue.value}
              onConfirm={handleConfirm}
              onCancel={() => (show.value = false)}
            ></Picker>
          </Popup>
        </View>
      )
    }
  },
})

export default PickerBox
