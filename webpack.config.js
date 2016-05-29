var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var TARGET = process.env.npm_lifecycle_event;

var ROOT_PATH = path.resolve(__dirname);

var common = {
	entry: path.resolve(ROOT_PATH, 'src'),
	resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
	output: {
		path: path.resolve(ROOT_PATH, 'dist'),
		filename: 'bundle.js'
	},
	module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: path.resolve(ROOT_PATH, 'src')
    }],
		loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'autoprefixer', 'sass'],
      include: path.resolve(ROOT_PATH, 'src')
    },{
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
    },{
				test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(ROOT_PATH, 'src')
			},{
        test: /\.json$/,
        loaders: ['json-loader'],
        include: path.resolve(ROOT_PATH, 'src')
      }
		]
	},
	plugins: [
    	new HtmlwebpackPlugin({
      		title: 'COP-25'
    	})
  	]
};

if (TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
} else {
  module.exports = merge(common);
}