const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, './dist/'),
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015',
				},
			},
			{
				test: /\.less$/i,
				use: [
				// compiles Less to CSS
				"style-loader",
				"css-loader",
				"less-loader",
				],
			},
		],
	},

	optimization: {
		minimizer: [
			// Use esbuild to minify
			new EsbuildPlugin(),
		],
	},
};
