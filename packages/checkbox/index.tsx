import { Image, View } from '@tarojs/components'
import { defineComponent } from 'vue'
import { Checkbox } from '@nutui/nutui-taro'
import CheckIcon from './checkbox_check.png'
import UncheckIcon from './checkbox_uncheck.png'

export const CheckBox = defineComponent({
  name: 'checkBox',
  props: {
    iconSize: {
      type: Number,
      default: 22,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => {
      const { iconSize, modelValue, ...otherProps } = props
      return (
        <View>
          <Checkbox
            {...otherProps}
            modelValue={modelValue}
            v-slots={{
              icon: () => (
                <Image
                  style={{ width: iconSize + 'px', height: iconSize + 'px' }}
                  src={UncheckIcon}
                />
              ),
              checkedIcon: () => (
                <Image
                  style={{ width: iconSize + 'px', height: iconSize + 'px' }}
                  src={CheckIcon}
                />
              ),
            }}
          ></Checkbox>
        </View>
      )
    }
  },
})

export default CheckBox
