module.exports = {
	entry: './app/components/GlobalComponent.js',
	output: {
		filename: 'publick/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}

}