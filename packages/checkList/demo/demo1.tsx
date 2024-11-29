import { ref } from 'vue'
import CheckList from '../index'
import { options } from './utils'

export default function () {
  const data = ref()
  return (
    <CheckList
      modelValue={data.value}
      data={options}
      placeholder="请选择"
    ></CheckList>
  )
}
