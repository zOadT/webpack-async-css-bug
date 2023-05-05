module.exports = () => ({
  experiments: {
	  // Error on `npm start`, removing this fixes it
    css: true,
  },

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
