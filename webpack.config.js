module.exports = {
  entry: './src/index.js', // where application will begin
  output: { path: './build', filename: 'bundle.js'}, // where the bundle will go
  module: {
    loaders: [  // define files to load and what to do with them
      {         // read js files while bundling, load through babel
        loader: 'babel-loader',
        test: /\.jsx?$/, // files that end in ".js" or ".jsx"
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
