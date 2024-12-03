import { ref } from 'vue'
import DatePickerBox from '../index'

export default function () {
  const data = ref('2024-12')

  return (
    <DatePickerBox
      flexStart
      placeholder="选择年月"
      showArrowDown
      v-model={data.value}
      type="year-month"
    />
  )
}
