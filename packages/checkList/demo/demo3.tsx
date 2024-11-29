import { defineComponent, ref } from 'vue'
import { asyncOptions } from './utils'
import CheckList from '../index'

export default defineComponent({
  setup() {
    const data = ref(2)

    return () => {
      return (
        <CheckList
          searchData={asyncOptions as any}
          modelValue={[data.value]}
          placeholder="请选择"
          showArrowLeft
        ></CheckList>
      )
    }
  },
})
