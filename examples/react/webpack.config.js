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
			new ESBuildMinifyPlugin(),
			// This is required only if your React version required explicit jsx-runtime (React <17)
			//new ProvidePlugin({
			//	React: 'react',
			//}),
		],
	},

	plugins: [
		new HtmlWebpackPlugin(),
	],
};
