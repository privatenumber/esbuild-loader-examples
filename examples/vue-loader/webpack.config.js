const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'production',

	entry: './src/component.vue',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, './dist/'),
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'esbuild-loader',
				options: {
					/**
					 * It's necessary to tell esbuild to use the 'js' loader
					 * because esbuild cannot auto-detect which loader to use
					 * based on the .vue extension.
					 */
					loader: 'js',
					target: 'es2015',
				},
			},
		],
	},

	optimization: {
		minimizer: [
			// Use esbuild to minify
			new EsbuildPlugin(),
		],
	},

	plugins: [
		new VueLoaderPlugin(),
	],
};
