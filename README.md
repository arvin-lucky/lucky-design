# lucky-design

[![NPM version](https://img.shields.io/npm/v/lucky-design.svg?style=flat)](https://npmjs.org/package/lucky-design)
[![NPM downloads](http://img.shields.io/npm/dm/lucky-design.svg?style=flat)](https://npmjs.org/package/lucky-design)

这是一个基于 React 开发的组件库

## Usage

TODO

## Options

TODO

## TODO

设置钩子文件为可执行
运行以下命令来设置 .husky/pre-commit 和 .husky/commit-msg 文件为可执行：

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

2.

```json
"lint-staged": {
		"*.{md,json}": [
			"prettier --write --no-error-on-unmatched-pattern"
		],
		"*.{css,less}": "stylelint --fix",
		"*.{js,jsx}": [
			"eslint --cache --fix",
			"prettier --write"
		],
		"*.{ts,tsx}": [
			"eslint --fix",
			"prettier --parser=typescript --write"
		]
	}
```

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
