const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, `./dist/`),
	},

	module: {
		rules: [
			// Use esbuild as a Babel alternative
			{
				test: /\.js$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015',
				},
			},
		],
	},

	optimization: {
		minimizer: [
			// Use esbuild to minify
			new ESBuildMinifyPlugin(),
		],
	},
};