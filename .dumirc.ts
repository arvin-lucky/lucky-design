import { defineConfig } from 'dumi';

export default defineConfig({
	base: '/lucky-design', // 设置站点部署路径
	publicPath: '/lucky-design/', // 设置资源部署路径
	outputPath: 'docs-dist',
	themeConfig: {
		name: 'lucky-design',
		logo: '/lucky-design/logo.png',
		showLineNum: true,
		socialLinks: {
			github: 'https://github.com/arvin-lucky/lucky-design',
		},
		hideHomeNav: true,
	},
	locales: [
		{ id: 'zh-CN', name: '中文' },
		{ id: 'en-US', name: 'EN' },
	],
	favicons: ['/lucky-design/favicon2.png'],
});
