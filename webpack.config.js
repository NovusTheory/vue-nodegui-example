const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      'vue': '@vue/runtime-core'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.node$/,
        use: [{ loader: "node-loader" }, { loader: "file-loader" }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp)$/i,
        use: [{ loader: "file-loader" }]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true
  }
})
