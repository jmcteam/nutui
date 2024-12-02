import { ref } from 'vue'
import DatePickerBox from '../index'

export default function () {
  const data = ref('2024-12-12')

  return <DatePickerBox placeholder="选择日期" v-model={data.value} />
}
