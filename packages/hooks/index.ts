import { useDidHide } from '@tarojs/taro'
import { watch } from 'vue'

/**
 * 创建一个防抖执行函数
 * @param watchValue 监听值
 * @fn 需要执行的函数
 * @param delay 防抖延迟时间（毫秒）
 */
export function useDebounceWatch(watchValue, fn, delay = 100) {
  let timeoutId = null

  useDidHide(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  watch(watchValue, () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn()
    }, delay)
  })
}

/**
 * 创建一个截流执行函数
 * @param watchValue 监听值
 * @fn 需要执行的函数
 * @param delay 防抖延迟时间（毫秒）
 */
export function useThrottleWatch(watchValue, fn, delay = 100) {
  let timeoutId = null

  useDidHide(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  watch(watchValue, () => {
    if (!timeoutId) fn()
    timeoutId = setTimeout(() => {
      timeoutId = null
    }, delay)
  })
}
