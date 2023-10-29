const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public'), 
    
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', 
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'public'), 
    port: 3000,
  },
};
