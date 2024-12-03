export const options = [
  { id: 1, name: 'xxx1' },
  { id: 2, name: 'xxx2' },
  { id: 3, name: 'xxx3' },
  { id: 4, name: 'xxx4' },
]

export const asyncOptions = () => {
  return new Promise((resolve) => {
    // 支持response格式 { result: [xxx] }
    setTimeout(() => {
      resolve([
        { id: 1, name: '异步数据1' },
        { id: 2, name: '异步数据2' },
        { id: 3, name: '异步数据3' },
        { id: 4, name: '异步数据4' },
        { id: 4, name: '异步数据5' },
      ])
    }, 2000)
  })
}
