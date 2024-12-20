import { defineComponent, ref } from 'vue'
import { options } from './utils'
import CheckList from '../index'

export default defineComponent({
  setup() {
    const data = ref([])

    return () => {
      return (
        <CheckList
          data={options}
          modelValue={data.value}
          placeholder="请选择"
          showArrowLeft
        ></CheckList>
      )
    }
  },
})
