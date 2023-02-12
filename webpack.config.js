const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './server.tsx',
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // The follwing extesions are ignored as they're compiled by vite in the react app
      { test: /\.(scss|css)$/, loader: 'ignore-loader' },
      { test: /\.(svg|jpg|png)$/, loader: 'ignore-loader' },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
