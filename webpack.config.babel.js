const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
            }
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // Will create style node from JS strings
                },
                {
                    loader: "css-loader" // wil change CSS into common JS
                },
                {
                    loader: "sass-loader" // Turns Sass into CSS 
                }
            ]
        }
    ]
    }
};