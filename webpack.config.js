const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'media/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|webp|gif|mp3)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/index.html", to: "./" },
                { from: "./src/css/style.css", to: "./" },
                { from: "./src/media/fonts/Mona Sans/Mona-Sans.woff2", to: "./media" },
                { from: "./src/media/images/icons", to: "./media/icons" },

            ],
        })
    ]
};