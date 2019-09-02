var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'first.bundle.js'
	},
	module: {
		rules: [
			{ test:/\.less$/,use:['style-loader','css-loader','less-loader']}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	mode:'development' 　
}
