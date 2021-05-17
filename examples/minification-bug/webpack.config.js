const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		// libraryTarget: 'commonjs',
		clean: true,
		path: path.resolve(__dirname, `./dist/`),
	},

	optimization: {
		minimizer: [
			// Use esbuild to minify
			new ESBuildMinifyPlugin({
				target: 'es2015',
			}),
		],
	},
};