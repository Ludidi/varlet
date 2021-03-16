# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作

### 引入

  ```js
import { PullRefresh } from '@varlet/ui'

createApp().use(PullRefresh)
```

### 基本使用

下拉到刷新位置时松开会触发`refresh`事件， 在事件开始时将`v-model`设置为`true`表示正在加载，完成后将`v-model`设置为`false`表示加载结束。

```html
<var-pull-refresh v-model='isRefresh' @refresh='refresh'>
  <var-cell 
    v-for="(item, index) in data" 
    :key="index" 
    border
  >
    {{ item + ' ' + (index + 1) }}
  </var-cell>
</var-pull-refresh>
```

```javascript
const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default {
  setup() {
    const isRefresh = ref(true)
    const data = ref(data1)

    const refresh = () => {
      isRefresh.value = true
      setTimeout(() => {
        data.value = data.value[0] === 'List Item' ? data2 : data1
        isRefresh.value = false
      }, 2000)
    }

    return {
      refresh,
      isRefresh,
      data
    }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `model-value / v-model` | 是否处于加载中状态| _boolean_ | - |
| `disabled` | 是否禁用下拉刷新 | _boolean_ | `false` |
| `animation-duration` | 动画时长(ms) | _number_ ｜ _string_ | `300` |
| `success-duration` | 成功提示展示时长(ms) | _number_ ｜ _string_ | `2000` |
| `bgColor` | control的背景颜色 | _string_ | `#005CAF` |
| `color` | control 的颜色 | _string_ | `#ffffff` |
| `successBgColor` | 成功状态下control的背景颜色 | _string_ | `#4CAF50` |
| `successColor` | 成功状态下control的颜色 | _string_ | `ffffff` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `refresh` | 下拉刷新时触发| - |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 默认插槽 | - |