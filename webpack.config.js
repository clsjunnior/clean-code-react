const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/main/index.tsx', // entry point of the application
	output: {
		path: path.resolve(__dirname, 'public/js'),
		publicPath: '/public/js/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'scss'], // extensions that are used
		alias: {
			'@': path.resolve(__dirname, 'src'), // alias @ to src
		}
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					{
						loader: 'sass-loader'
					}
				],
				exclude: /node_modules/,
			}
		]
	},
	devServer: {
		static: './public', // content base public folder
		historyApiFallback: true, // enable history api fallback so that routing works with browser refresh
		devMiddleware: {
      writeToDisk: true, // enable write to disk for webpack dev server
    },
	},
	externals: { // don't bundle the 'react' and 'react-dom' libraries
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	plugins: [
		new CleanWebpackPlugin(), // clean the output folder before building
	]
}