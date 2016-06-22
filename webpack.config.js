var path = require("path");
var webpack = require ('webpack');
module.exports = {
  entry: {
    app: ["./source/main.js"],
    button:["./source/button.js"]
  },
  devServer:{
    contentBase: './www',  //Relative directory for base of server
    devtool: 'eval',
    hot: true,        //Live-reload
    inline: true,
    port: 8080,        //Port Number
    host: '0.0.0.0',  //Change to '0.0.0.0' for external facing server
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        //React-hot loader and
        test: /\.js$/,  //All .js files
        loaders: ['react-hot', 'babel-loader'], //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    })
  ]
};