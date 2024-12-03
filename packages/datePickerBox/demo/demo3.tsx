import { ref } from 'vue'
import DatePickerBox from '../index'

export default function () {
  const data = ref('16:20')

  return (
    <DatePickerBox
      flexStart
      placeholder="选择时分"
      showArrowDown
      v-model={data.value}
      type="hour-minute"
    />
  )
}
