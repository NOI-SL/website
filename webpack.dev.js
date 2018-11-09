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
    entry: ['./src/styles/main.scss', './src/scripts/app.ts'],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
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
            {context: 'src', from: '**/*.html'},
            {from: 'src/**/*.ttf', to: 'fonts/', flatten: true},
            {from: 'src/**/*.png', to: 'img/', flatten: true},
            {from: 'src/**/*.svg', to: 'img/', flatten: true},
            {from: 'src/LICENSE', flatten: true},
            {from: 'src/README.md', flatten: true}
        ]),
        new OptimizeCssAssetsPlugin()
    ]
};