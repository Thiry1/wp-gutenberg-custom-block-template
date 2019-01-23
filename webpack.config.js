const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dest"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            importLoaders: 2,
                            localIdentName: "[name]___[local]___",
                        },
                    },
                    "sass-loader",
                ],
                include: [path.join(__dirname, "./src/views")],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192, // 8kb より小さいファイルは inline 埋め込み
                        }
                    }
                ]
            }
        ]
    }
};
