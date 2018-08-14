const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: ['./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.NamedModulesPlugin()].concat(
        isDev
            ? []
            : [
                  new CopyWebpackPlugin([
                      { from: 'dist/bundle.js', to: '../public' },
                      { from: 'index.html', to: '../public' },
                      { from: 'manifest.json', to: '../public' },
                      { from: 'icons/', to: '../public/icons' },
                      { from: 'splashscreens/', to: '../public/splashscreens' },
                      { from: 'src/services/sw.js', to: '../public' }
                  ])
              ]
    )
};
