const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/style.less',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, './dist/'),
	},

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'esbuild-loader',
						options: {
							/**
							 * Since esbuild isn't aware of the `.less` extension
							 * it cannot auto-detect how to handle it.
							 * 
							 * We need to tell it to treat the output of
							 * `less-loader` as CSS.
							 */
							loader: 'css',
							minify: true,
						},
					},
					'less-loader',
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
