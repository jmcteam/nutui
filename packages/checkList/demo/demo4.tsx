import { defineComponent, ref } from 'vue'
import { options } from './utils'
import CheckList from '../index'

export default defineComponent({
  setup() {
    const data = ref(4)

    return () => {
      return (
        <CheckList
          checkType="check"
          data={options}
          modelValue={[data.value]}
          placeholder="请选择"
          showArrowLeft
        ></CheckList>
      )
    }
  },
})
