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
					// This will make esbuild automatically generate import statements,
					// making the ProviderPlugin unnecesary if used only for "react"
					jsx: 'automatic',
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
	],
};
