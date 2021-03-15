const path = require('path');
const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',

	entry: './src/index.tsx',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, `./dist/`),
	},

	module: {
		rules: [
			// Use esbuild as a Babel alternative
			{
				test: /\.tsx?$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'tsx',
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},

	optimization: {
		minimizer: [
			// Use esbuild to minify
			new ESBuildMinifyPlugin(),
		],
	},

	plugins: [
		new ESBuildPlugin(),
		new MiniCssExtractPlugin(),
	],
};