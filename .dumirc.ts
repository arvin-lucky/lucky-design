import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';
import { description } from './package.json';

export default defineConfig({
	base: '/lucky-design', // 设置站点部署路径
	publicPath: '/lucky-design/', // 设置资源部署路径
	outputPath: 'docs-dist',
	themeConfig: {
		...defineThemeConfig({
			description,
			keywords: ['react', 'ant design', 'lucky-design', 'component', 'library'],
			author: 'Arvin',
			thumbBackground: true,
			social: {
				github: {
					name: 'GitHub',
					link: 'https://github.com/arvin-lucky/lucky-design',
				},
			},
		}),
		name: 'lucky-design',
		logo: '/lucky-design/logo.png',
		showLineNum: true,
		// socialLinks: {
		// 	github: 'https://github.com/arvin-lucky/lucky-design',
		// },
		hideHomeNav: true,
		favicon: '/lucky-design/favicon2.png',
		footer: 'Copyright © 2024-present | Made with ❤ by Arvin',
	},
	apiParser: {},
	resolve: {
		entryFile: './src/index.ts',
	},
	alias: {
		'lucky-design': require.resolve('./src/index.ts'),
	},
	mfsu: false,
	devtool: 'cheap-module-source-map',
	esbuildMinifyIIFE: true,
	codeSplitting: {
		jsStrategy: 'bigVendors',
	},
	locales: [{ id: 'zh-CN', name: '中文' }],
	// monorepoRedirect: {},
	// favicons: ['/lucky-design/favicon2.png'],
});
