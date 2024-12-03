# checkList 勾选组件

### 介绍

通过伸展出的列表，勾选数据，并展示勾选项内容的表单组件

### 引入

在 Taro 文件中引入组件

```js
import { checkList } from '@jmcteam/nutui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 多选用法

::: $demo2 :::

### 异步请求

> 支持 response 格式 { result: [xxx] }

传入异步请求直接远程获取数据

### 勾选样式

::: $demo3 :::

### Props

| 参数              | 说明                                     | 类型                   | 默认值     |
| ----------------- | ---------------------------------------- | ---------------------- | ---------- |
| virtualList       | 虚拟列表开启                             | boolean                | `false`    |
| searchSync        | 搜索输入时是否触发异步请求 searchData    | boolean                | `false`    |
| flexStart         | 容器 flex 布局方式，默认 flexEnd 生效    | boolean                | `false`    |
| placeholder       | 选择提示占位                             | string                 | `请选择`   |
| searchPlaceholder | 搜索提示占位                             | string                 | `请搜索`   |
| containerClass    | 容器额外的 class                         | string                 | `-`        |
| data              | 选择项的数据                             | array                  | `[]`       |
| modelValue        | 选中的值                                 | array                  | `[]`       |
| checkAll          | 是否可以选中全部                         | boolean                | `false`    |
| onChange          | 选中变更方法                             | function               | `- `       |
| limit             | 限制选择数量                             | number                 | `Infinity` |
| labelName         | data 中单项数据对应 `label` 的字段名称   | string                 | `name`     |
| fieldName         | data 中单项数据对应 `id` 的字段名称      | string                 | `id`       |
| optionsLabelName  | 当选择数据和选中数据文案字段不一致时使用 | string                 | `-`        |
| showArrowLeft     | 展示右箭头                               | boolean                | `false`    |
| showArrowDown     | 展示下箭头                               | boolean                | `false`    |
| searchShow        | 展示搜索框                               | boolean                | `true`     |
| allowClear        | 展示下箭头                               | boolean                | `true`     |
| searchData        | 远程搜索初始化数据                       | function               | `-`        |
| mode              | 勾选狂类型                               | 'single' 或 'multiple' | `single`   |
| checkType         | 勾选狂类型                               | 'checkbox' 或 'check'  | `checkbox` |
| disabled          | 是否禁用                                 | boolean                | `false`    |
