module.exports = {
  entry: './src/index.ts',
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
        loader: 'style-loader!css-loader!postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')({grid: true})
          ]
        },
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
      contentBase: 'dest',
  },
}
