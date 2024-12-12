---
title: 组件库规范
owner: Arvin
---

## 组件库规范

---

### 开发规范

项目使用 git-cz 提交格式化的 commit 记录，用 commitlint 检测 commit 格式是否符合规范。默认情况下 push 到分支 X.Y.x , master,beta,alpha 这几个分支才会触发自动发布流程，并且只有 feat、fix 和 refactor 提交才会触发版本升级，版本号按照语义化版本规则自动生成。

- 版本号按照 x.y.z 格式组织（git tag 会加上 v 前缀，如 v1.0.0 ）
- bug fix 发布会增加修订版本号（如 1.0.0 –> 1.0.1 ）
- feature 或者 refactor 发布会增加次版本号（如 1.0.0 –> 1.1.0 ）
- break change feature 发布会增加主版本号（如 1.1.1 –> 2.0.0 ，官方建议这种不兼容的升级应该推送到 next 分支开发，之后合并到 master ）

为了让 commit 信息尽可能的好看，减少不必要的 Merge from 提交记录，我们使用 rebase 的方式合并代码，参考以下步骤:

- 在 Gitlab 的项目设置中将 Merge requests 中的 Merge method 设置为 Fast-forward merge ，这样 merge request 审核代码的时候就不会产生 Merge from xxx
- 本地合并远程仓库的代码使用 git pull --rebase ，而不是 git pull ，可以通过以下命令配置以后默认 pull 的规则就是 rebase ，不用每次都加 --rebase : git config --global pull.rebase true

### 项目目录 lucky-design

```
├── docs 介绍文档
│   ├── guide 指南项
│   │   ├── quick-start.md 快速开始文档
│   │   └── standard.md 组件库规范
│   └── index.md 首页介绍
|
├── public
│   └── images
│       └── logo.png
|
├── src
│   ├── __tests__ 单元测试目录
│   │   ├── __snapshots__
│   │   └── coverage
|   |
│   ├── assets 图片资源
|   |
│   ├── components 组件目录
│   │   ├── common 通用类组件
|   |       └── __tests__ 测试目录
│   │   ├── layout 布局类组件
│   │   └── showdata 数据展示类组件
|   |
│   |── utils 工具类
│   ├── |__tests__ 单元测试目录
│   |   ├── baseInfo.ts
│   |   └── utils.ts
│   ├── componentStyle.ts 展示组件的样式配置
│   └── index.ts 组件全局导出
|
├── CHANGELOG.md 提交日志
├── README.md
├── jest.config.js 单元测试配置
├── pnpm-lock.yaml
├── package.json
├── tsconfig.json
└── typings.d.ts
```

### 组件分类标准

按照 Antd 组件分类标准

- 通用
- 布局
- 导航
- 数据录入
- 数据展示
- 反馈
- 其他

### 单个组件组成

- 组件源代码
- 组件介绍文档（md）
- 组件测试代码

### 组件文档编写规范

- 组件负责人 如（XXX;XXX;XXX...）
- 组件名称 如：Button 按钮
- 组件简介 如：按钮用于开始一个即时事件
- 组件引用示例 （展示主题名称 + 使用注意事项）
- 组件 API （Name Description Type Default）

### 单元测试示例

```
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // 断言库
import { render, cleanup } from '@testing-library/react';

// 1. 编排（Arrange）: 渲染组件 + 获取所需的DOM元素。
// 2. 执行（Act）: 执行操作
// 3. 断言（Assert）

afterEach(cleanup); // 每次测试完成后清理内存

describe('Button', () => {
  test('渲染', () => {});
  test('disabled', () => {});
});
```

[@testing-library 测试库](https://testing-library.com/docs/)
