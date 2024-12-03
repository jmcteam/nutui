import { defineComponent, ref } from 'vue'
import { options } from './utils'
import CheckList from '../index'

export default defineComponent({
  setup() {
    const data = ref([1, 2])
    // limit限制存在问题
    return () => {
      return (
        <CheckList
          flexStart
          mode="multiple"
          limit={2}
          data={options}
          modelValue={data.value}
          placeholder="请选择(最多选择2项)"
          showArrowLeft
        ></CheckList>
      )
    }
  },
})
