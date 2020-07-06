import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './index.html',
});

const config: webpack.Configuration = {
    mode: 'development',
    entry: ['react-hot-loader/patch', './src'],

    devtool: 'source-map',
    devServer: {
        hot: true,
    },
    node: {
        fs: 'empty',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [htmlPlugin, new Dotenv()],
};

export default config;
