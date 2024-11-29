/**
 * 创建一个防抖执行函数
 * @param watchValue 监听值
 * @fn 需要执行的函数
 * @param delay 防抖延迟时间（毫秒）
 */
export declare function useDebounceWatch(
  watchValue: any,
  fn: any,
  delay?: number,
): void
/**
 * 创建一个截流执行函数
 * @param watchValue 监听值
 * @fn 需要执行的函数
 * @param delay 防抖延迟时间（毫秒）
 */
export declare function useThrottleWatch(
  watchValue: any,
  fn: any,
  delay?: number,
): void
