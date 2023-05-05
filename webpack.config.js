const webpack = require('webpack');

module.exports = () => ({
  experiments: {
	  // Error on `npm start`, removing this fixes it
    css: true,
  },

  // enable HMR (same error accurs when using webpack-dev-server)
  entry: {
    app: './src/index.js',
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /stylesheet\.js$/i,
        use: ['./a-pitching-loader.js'],
        type: 'asset/source',
      },
    ],
  },
});
