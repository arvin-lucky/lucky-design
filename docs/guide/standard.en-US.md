---
title: Component Library Specifications
owner: Arvin
---

## Component Library Specifications

---

### Development Specifications

The project uses git-cz to submit formatted commit records, and uses commitlint to detect whether the commit format complies with the specifications. By default, push to branches X.Y.x, master, beta, alpha will trigger the automatic release process, and only feat, fix and refactor submissions will trigger version upgrades. The version number is automatically generated according to the semantic version rules.

- Version numbers are organized in the format of x.y.z (git tag will be prefixed with v, such as v1.0.0 )
- Bug fix releases will increase the revision number (such as 1.0.0 –> 1.0.1 )
- Feature or refactor releases will increase the minor version number (such as 1.0.0 –> 1.1.0 )
- Break change feature releases will increase the major version number (such as 1.1.1 –> 2.0.0 , the official recommendation is that such incompatible upgrades should be pushed to the next branch for development and then merged into master )

In order to make the commit information as beautiful as possible and reduce unnecessary Merge from submission records, we use rebase to merge the code. Refer to the following steps:

- In the project settings of Gitlab, set the Merge method in Merge requests to Fast-forward merge, so that Merge from xxx will not be generated when the merge request reviews the code
- Locally merge the remote repository code using git pull --rebase instead of git pull , which can be configured with the following command. The default pull rule is rebase, no need to add --rebase every time: git config --global pull.rebase true

### Project directory lucky-design

```
├── docs Introduction document
│ ├── guide Guide item
│ │ ├── quick-start.md Quick start document
│ │ └── standard.md Component library specification
│ └── index.md Home page introduction
|
├── public
│ └── images
│ └── logo.png
|
├── src
│ ├── __tests__ Unit test directory
│ │ ├── __snapshots__
│ │ └── coverage
| |
│ ├── assets Image resources
| |
│ ├── components Component directory
│ │ ├── common Common class components
| | └── __tests__ test directory
│ │ ├── layout layout component
│ │ └── showdata data display component
| |
│ |── utils tool class
│ ├── |__tests__ unit test directory
│ | ├── baseInfo.ts
│ | └── utils.ts
│ ├── componentStyle.ts display component style configuration
│ └── index.ts component global export
|
├── CHANGELOG.md submission log
├── README.md
├── jest.config.js unit test configuration
├── pnpm-lock.yaml
├── package.json
├── tsconfig.json
└── typings.d.ts
```

### Component classification standard

According to Antd component classification standard

- General
- Layout
- Navigation
- Data Entry
- Data Display
- Feedback
- Others

### Composition of a single component

- Component source code
- Component introduction document (md)
- Component test code

### Component document writing specifications

- Component responsible person such as (XXX;XXX;XXX...)

- Component name such as: Button button
- Component introduction such as: Button is used to start an instant event
- Component reference example (display theme name + usage precautions)
- Component API (Name Description Type Default)

### Unit test example

```
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // Assertion library
import { render, cleanup } from '@testing-library/react';

// 1. Arrange: render component + get required DOM elements.
// 2. Act: perform the operation
// 3. Assert

afterEach(cleanup); // clean up the memory after each test

describe('Button', () => {
test('render', () => {});
test('disabled', () => {});
});
```

[@testing-library test library](https://testing-library.com/docs/)
