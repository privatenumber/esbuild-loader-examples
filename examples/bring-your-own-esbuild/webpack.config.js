const path = require('path');
const esbuild = require('esbuild');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.ts',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, `./dist/`),
	},

	module: {
		rules: [
			// Use esbuild as a Babel alternative
			{
				test: /\.ts$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'ts',
					target: 'es2015',
					implementation: esbuild,
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
