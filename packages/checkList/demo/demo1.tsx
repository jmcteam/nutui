import { defineComponent } from 'vue'
import CheckList from '..'

export default defineComponent({
  setup() {
    return  () => <CheckList placeholder="请选择" />
  },
})
