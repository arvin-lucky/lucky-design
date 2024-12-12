module.exports = {
	printWidth: 80,
	singleQuote: true,
	semi: true,
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'avoid',
	insertPragma: false,
	endOfLine: 'auto',
	htmlWhitespaceSensitivity: 'ignore',
	tabWidth: 2,
	useTabs: true,
	vueIndentScriptAndStyle: false,
	jsxBracketSameLine: false,

	pluginSearchDirs: false,
	plugins: [
		require.resolve('prettier-plugin-organize-imports'),
		require.resolve('prettier-plugin-packagejson'),
	],
	proseWrap: 'never',
	overrides: [
		{
			files: '*.md',
			options: {
				proseWrap: 'preserve',
			},
		},
	],
};
