const path = require("path");

module.exports = {
    mode:"development", //or production
    entry: path.resolve(__dirname,`src`,`app`), //files called index.js have a special designation to automatically call that file
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        historyApiFallback:true
    },
    module: {
        rules:[
            {
                test: /\.jsx?/,
                loader:'babel-loader'
            }
        ]
    }

}