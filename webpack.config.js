const webpack = require('webpack');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};