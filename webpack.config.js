var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	devtool: 'inline-source-map',
	entry: path.join(APP_DIR, 'index.js'),
	output: {
		path: BUILD_DIR,
		filename: path.join('/js', 'bundle.js'),
		publicPath: '/'
	},
	resolve: {
		modulesDirectories : ['node_modules', APP_DIR],
		extensions: ['', '.js', '.scss']
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				exclude: /node_modules/,
				loader : 'babel'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			mangle: true,
			sourcemap: false,
			beautify: false,
			dead_code: true
		}),
		new ExtractTextPlugin(path.join('/style' , '/main.css'), {
			allChunks: true
		})
	]
};

module.exports = config;