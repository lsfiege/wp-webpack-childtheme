//webpack.config.js
const path = require('path');

module.exports = function(env) {
    return {
        entry: "./src/js/app.js",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js",
            publicPath: '/dist'
        },
        module: {
            loaders: [
                {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
                {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader", exclude: /node_modules/},
                {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'}
            ]
        }
    }
};