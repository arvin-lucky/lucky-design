---
nav:
  title: 组件
  order: 2
group: 表单
toc: content
---

# TextTooltip

按钮组件用于触发一个动作或事件，如提交一个表单、打开一个对话框、取消一个动作或执行一个删除操作。

## 引用

```tsx | pure
import { TextTooltip } from 'lucky-design';
```

## 使用

```tsx
import React from 'react';
import { TextTooltip } from 'lucky-design';

export default () => (
	<TextTooltip title="hello world!" limitLength={11}>
		hello world!
	</TextTooltip>
);
```

## 参数

<API id="TextTooltip" type="props"></API>
