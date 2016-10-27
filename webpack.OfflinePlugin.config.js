var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var OfflinePlugin = require('offline-plugin');
module.exports = {
  entry: {
    app: ["./src/main.js"],
    app2: ["./src/App2/index.js"]

  },
  output: {
    path: "build" ,
    //publicPath: "/lib/",
    filename: "lib/[name]_bundle.js"
  },
  plugins: [
    new CommonsChunkPlugin("lib/commons.chunk.js"),
    new OfflinePlugin({
      caches:{
        main: ['index.html', 'lib/*.js', 'lib/*.css', 'lib/images/*.png', 'lib/images/*.jpg', 'lib/images/*.svg', 'lib/images/*.gif']
      },
      externals: ['index.html']
    })
  ],
  // resolve TypeScript and Vue file
  resolve: {
    alias: {
      //'src': path.resolve(__dirname, 'src'),
      //'/node_modules': path.resolve(__dirname, 'node_modules'),
      //'components': path.resolve(__dirname, 'src/components'),
      //'App': path.resolve(__dirname, 'src/App'),
      //'modules': path.resolve(__dirname, 'src/modules')
    },
    extensions: ['',  '.vue', '.js']
  },
  module: {
      loaders: [
          { test: /\.vue$/, loader: 'vue' },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          // {
          //   test: /\.(png|jpg|gif|svg)$/,
          //   loader: 'url-loader?limit=1024'
          // },
          {
              test: /\.(jpg|jpeg|gif|png)$/,
              // exclude: /node_modules/,
              loader:'url-loader?limit=1024&name=lib/images/[name].[ext]'
          },
          {
              test: /\.(woff|woff2|eot|ttf|svg)$/,
              // exclude: /node_modules/,
              loader: 'url-loader?limit=1024&name=lib/fonts/[name].[ext]'
          },
          //{ test: /\.tsx?$/, loader: 'ts-loader' },
          //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest

      ],
  },
  vue: {
    // instruct vue-loader to load TypeScript
    //loaders: { js: 'babel'},
    postcss: [require('postcss-cssnext')()],
    // make TS' generated code cooperate with vue-loader
    //esModule: true
  },
  devServer: {
    contentBase: __dirname + "/build",
    hot: true,
    inline: true,
    historyApiFallback: true,
    //noInfo: true,
     proxy: {
       '/Images/*': {
         target: 'https://rawgit.com/giorgio-casciaro/CivilStyle/master/',//target: 'https://rawgit.com/giorgio-casciaro/CivilStyle/master/',
         changeOrigin: true,
         //ignorePath:true,
         https: true
       }
      }
   },
};
