const autoprefixer = require('autoprefixer');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    entry: ['./src/styles/app.scss', './src/scripts/app.ts'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules'],
                        },
                    }],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/index.html', to: 'index.html', toType: 'file'},
            {from: 'src/index.html', to: '404.html', toType: 'file'},
            {from: 'src/register/index.html', to: 'register/index.html', toType: 'file'}, 
            {from: 'src/contact-us/index.html', to: 'contact-us/index.html', toType: 'file'},
            {from: 'src/CNAME', to: 'CNAME', toType: 'file'},
            {from: 'src/LICENSE', flatten: true},
            {from: 'src/README.md', flatten: true}
        ]),
        new MinifyPlugin(),
        new OptimizeCssAssetsPlugin()
    ]
};