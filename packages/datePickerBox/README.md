# checkList 勾选组件

### 介绍

通过伸展出的列表，勾选数据，并展示勾选项内容的表单组件

### 引入

在 Taro 文件中引入组件

```js
import { checkList } from '@jmc/nutui'
```

## 代码演示

### 基础用法

区别于`nutui`, modelValue 支持传入事件格式`YYYY-MM-DD`

::: $demo1 :::

### Props

| 参数               | 说明                                                                                                                                 | 类型                                                   | 默认值   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | -------- |
| v-model            | 初始值                                                                                                                               | date                                                   | `null`   |
| type               | 时间类型，可选值 `date`(年月日) `time`(时分秒) `year-month`(年月) `month-day`(月日) `datehour`(年月日时) `hour-minute`(时分`v4.0.5`) | string                                                 | `date`   |
| minute-step        | 分钟步进值                                                                                                                           | number                                                 | `1`      |
| is-show-chinese    | 每列是否展示中文                                                                                                                     | boolean                                                | `false`  |
| min-date           | 开始日期                                                                                                                             | date                                                   | `十年前` |
| max-date           | 结束日期                                                                                                                             | date                                                   | `十年后` |
| formatter          | 选项格式化函数                                                                                                                       | (type: string, option: PickerOption) => PickerOption   |          |
| filter             | 选项过滤函数                                                                                                                         | (type: string, option: PickerOption) => PickerOption[] |          |
| title              | 设置标题                                                                                                                             | string                                                 | `null`   |
| ok-text            | 确定按钮文案                                                                                                                         | string                                                 | `确定`   |
| cancel-text        | 取消按钮文案                                                                                                                         | string                                                 | `取消`   |
| swipe-duration     | 惯性滚动时长                                                                                                                         | number \| string                                       | `1000`   |
| visible-option-num | 可见的选项个数                                                                                                                       | number \| string                                       | `7`      |
| option-height      | 选项高度                                                                                                                             | number \| string                                       | `36`     |
| show-toolbar       | 是否显示顶部导航                                                                                                                     | boolean                                                | `true`   |

### Events

| 事件名  | 说明               | 回调参数                                          |
| ------- | ------------------ | ------------------------------------------------- |
| confirm | 点击确定按钮时触发 | `{ selectedValue, selectedOptions }`              |
| cancel  | 点击取消按钮时触发 | `{ selectedValue, selectedOptions }`              |
| change  | 选项改变时触发     | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 自定义滑动数据底部区域 |
| top     | 自定义滑动数据顶部区域 |

### PickerOption 数据结构

| 键名      | 说明                 | 类型             | 默认值 |
| --------- | -------------------- | ---------------- | ------ |
| text      | 选项的文字内容       | string \| number | -      |
| value     | 选项对应的值，且唯一 | string \| number | -      |
| className | 添加额外的类名       | string           | -      |
| children  | 用于级联选项         | Array            | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                 | 默认值                     |
| ------------------------------------ | -------------------------- |
| --nut-picker-cancel-color            | _#808080_                  |
| --nut-picker-ok-color                | _var(--nut-primary-color)_ |
| --nut-picker-bar-cancel-font-size    | _14px_                     |
| --nut-picker-bar-ok-font-size        | _14px_                     |
| --nut-picker-bar-button-padding      | _0 15px_                   |
| --nut-picker-bar-title-font-size     | _16px_                     |
| --nut-picker-bar-title-color         | _var(--nut-title-color)_   |
| --nut-picker-bar-title-font-weight   | _normal_                   |
| --nut-picker-item-height             | _36px_                     |
| --nut-picker-item-text-color         | _var(--nut-title-color)_   |
| --nut-picker-item-text-font-size     | _14px_                     |
| --nut-picker-item-active-line-border | _1px solid #d8d8d8_        |
