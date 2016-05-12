const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

/* run via 'npm run build/start' */

//require('./styles/main.scss');

//process.env.BABEL_ENV = TARGET; //hot reloading with maintaining state didn't work

const common = {

	entry: {
		app: PATHS.app
	},
	// add resolve.extensions.
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				// Set up scss
				// Test expects a RegExp! Note slashes!
				test: /\.scss$/,
				loaders: ['style', 'css', "sass"],
				include: PATHS.app
			},
			{
				// Set up js and jsx
				test: /\.js$/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				},
				include: PATHS.app
			}
		]
	}
};

/* Default configuration. We will return this
	if Webpack is called outside of npm */
if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		/*devServer: {
			// This doesn't always work well on Windows
			contentBase: PATHS.build,

			// Enable history API fallback so HTML5
			// History API based routing works. This
			// is a good default that will come in
			// handy in more complicated setups 
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// Display only errors to reduce the amount of output
			stats: 'errors-only',

			// Parse host and port from env so this is easy
			// to customize
			
			host: process.env.HOST,
			port: process.env.PORT
		},*/
		// Source map allows you to see the source
		// of errors in builds
		// REMOVE FOR PRODUCTION
		devtool: 'eval-source-map',
		watch: true,
		watchOptions: {
			// More data-intesive alt to devServer
			poll: true
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {
		devtool:'cheap-module-source-map',
		watchOptions: {
			poll: false
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
			})
		],
		module: {
			loaders: [
				{
					test: /.*\/app\/.*\.js$/,
					loader: "uglify"
				}
			]
		}
	});
}

module.exports = common;