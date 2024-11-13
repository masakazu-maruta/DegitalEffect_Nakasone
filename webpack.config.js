const path = require('path');
module.exports = {
    mode: 'development',
    entry: './dev/ts/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["to-string-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", "js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./assets/js/main"),
        clean: false,
    }
}