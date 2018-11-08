const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.min.[hash].css');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


let webpackSettings = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },

  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: extractCSS.extract([
         
            "css-loader",
            "sass-loader",
            'postcss-loader'
          ])
      },  {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        exclude: /(\/images)/,
        use: 'file-loader'
      }, {
        test: /\.(jpg|png|gif|ico)$/,
        use: 'file-loader'
      }]
  },
  resolve: {
    modules: [
      'app', 'node_modules'
    ],
    extensions: [
      '.js', '.jsx', '.react.js'
    ],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
};
if (process.argv.indexOf('--mode=production') > -1) {
  webpackSettings.optimization = {
    minimizer: [new UglifyJsPlugin()]
  }
} else {
  webpackSettings.devtool = 'eval-source-map';
}
module.exports = webpackSettings;
