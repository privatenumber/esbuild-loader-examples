const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { ProvidePlugin } = require('webpack');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, `./dist/`),
	},

	module: {
		rules: [
			// Use esbuild as a Babel alternative
			{
				test: /\.js$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'jsx',
					target: 'es2015',
				},
			},
		],
	},

	optimization: {
		minimize: false,
		minimizer: [
			// Use esbuild to minify
			new ESBuildMinifyPlugin(),
		],
	},

	plugins: [
		new HtmlWebpackPlugin(),
		new ProvidePlugin({
			React: 'react',
		}),
	],
};