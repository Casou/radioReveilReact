const webpack = require('webpack');
const path = require('path');

const modeIndex = process.argv.findIndex(arg => arg === "--mode");
const env = modeIndex < 0 || process.argv.length <= (modeIndex) ? "development" : process.argv[modeIndex + 1];

// const SRC = path.resolve(__dirname, "src");

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name (file) {
                            if (env === 'development') {
                                return '[path][name].[ext]'
                            }

                            return '[hash].[ext]'
                        },
                        outputPath: 'fonts/'
                    }
                }]
            },{
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name (file) {
                            if (env === 'development') {
                                return '[path][name].[ext]'
                            }

                            return '[hash].[ext]'
                        },
                        outputPath: 'images/'
                    }
                }]
            },{
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name (file) {
                            if (env === 'development') {
                                return '[path][name].[ext]';
                            }

                            return '[hash].[ext]';
                            // '[path][name].[ext]?[hash]'
                        },
                        outputPath: 'musiques/'
                    }
                }]
            }
            /*
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: '[path][name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }
            */
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            images: path.resolve(__dirname, 'src/public/images/'),
            musiques: path.resolve(__dirname, 'src/public/musiques/')
        }
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};