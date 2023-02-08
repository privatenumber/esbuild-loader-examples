const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.jsx',

	output: {
		path: path.resolve(__dirname, `./dist/`),
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015',
					// This will make esbuild automatically generate import statements,
					// making the ProviderPlugin unnecesary if used only for "react".
					// Note that this option makes sense only when used in conjuction
					// with React >16.40.0 || >17
					// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
					jsx: 'automatic',
				},
			},
		],
	},

	optimization: {
		minimize: false,
		minimizer: [
			// Use esbuild to minify
			new EsbuildPlugin(),
		],
	},

	plugins: [
		new HtmlWebpackPlugin(),
	],
};
