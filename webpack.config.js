module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dest`,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postLoaders: {
            js: 'babel-loader?presets=es2015'
          },
          postcss: [
            require('postcss-cssnext'),
            require('postcss-calc'),
            require('postcss-color-function'),
            require('postcss-import'),
            require('postcss-nested')
          ]
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true,
              importLoaders: 1
            },
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    historyApiFallback: true,
    contentBase: 'dest'
  },
}
