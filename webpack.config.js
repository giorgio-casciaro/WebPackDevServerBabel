//https://github.com/jonathantneal/postcss-font-magician
//https://github.com/simplaio/rucksack
//https://github.com/seaneking/postcss-responsive-type

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackShellPlugin = require("webpack-shell-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var OfflinePlugin = require('offline-plugin');
var webpack = require('webpack');
console.log(process.env.NODE_ENV);
var ISDEV = (process.env.NODE_ENV !== 'production');
var plugins = [
  new CommonsChunkPlugin({
    name: "commons",
    filename: "lib/commons.chunk.js",
    chunks: ["app"],
  }),


];

var postcss = function(webpack) {
  return [
    require("postcss-import")({
      addDependencyTo: webpack,
      path: ["src/Modules/UI/", "src/Modules/", "src/Modules/UI/Icons/css/"]
    }),
    require('postcss-url')(),
    require('postcss-mixins'),
    require('lost')(),
    require('postcss-font-magician')(),
    require('postcss-cssnext')()
  ];
};

var vue={
  postcss
};

if (ISDEV) {
  var cssLoaders = "style-loader!css-loader!postcss-loader";
} else {
  var cssLoaders = ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader");
  plugins.push(new ExtractTextPlugin("[name].css"));
  plugins.push(new WebpackShellPlugin({
    onBuildStart: ['echo "Starting"'],
    onBuildEnd: ["sed -i -e 's/mint-//g' ./build/shared.css && sed -i -e 's/mintui-/ui-/g' ./build/shared.css"]
  }));
  // plugins.push(new OfflinePlugin({
  //   caches:{
  //     main: ['index.html','app.css', 'lib/*.js', 'lib/*.css', 'lib/images/*.png', 'lib/images/*.jpg', 'lib/images/*.svg', 'lib/images/*.gif']
  //   },
  //   externals: ['index.html']
  // }));
  vue.loaders={
    css:cssLoaders
  };
}




module.exports = {
  entry: {
    app: ["./src/main.js"],
    shared: ["./src/shared.js"],
    //app2: ["./src/App2/index.js"]

  },
  output: {
    path: "build/",
    //publicPath: "/lib/",
    filename: "lib/[name]_bundle.js",
    chunkFilename: "lib/[id]_chunk.js",
    publicPath: ""
  },
  plugins,
  // resolve TypeScript and Vue file
  resolve: {
    alias: {
      'Modules': path.resolve(__dirname, 'src/Modules'),
      'App': path.resolve(__dirname, 'src/App'),
      //'/node_modules': path.resolve(__dirname, 'node_modules'),
      //'components': path.resolve(__dirname, 'src/components'),
      //'App': path.resolve(__dirname, 'src/App'),
      //'modules': path.resolve(__dirname, 'src/modules')
    },
    extensions: ['', '.vue', '.js', '.css'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }, {
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
        loader: 'url-loader?limit=1024&name=lib/images/[name].[ext]'
      },
      // Font Definitions
      {
        test: /\.svg.*$/,
        loader: 'url?limit=3000&mimetype=image/svg+xml&name=font/[name].[ext]'
      }, {
        test: /\.woff.*$/,
        loader: 'url?limit=3000&mimetype=application/font-woff&name=font/[name].[ext]'
      }, {
        test: /\.woff2.*$/,
        loader: 'url?limit=3000&mimetype=application/font-woff2&name=font/[name].[ext]'
      }, {
        test: /\.[ot]tf.*$/,
        loader: 'url?limit=3000&mimetype=application/octet-stream&name=font/[name].[ext]'
      }, {
        test: /\.eot.*$/,
        loader: 'url?limit=3000&mimetype=application/vnd.ms-fontobject&name=font/[name].[ext]'
      },
      //{ test: /\.tsx?$/, loader: 'ts-loader' },
      //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      {
        test: /\.css.*$/,
        loader: cssLoaders
          //loader: 'style-loader!css-loader!postcss-loader'
      },
      //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest

    ],
  },
  vue,
  postcss,
  devServer: {
    contentBase: __dirname + "/build/",
    hot: true,
    inline: true,
    historyApiFallback: true,
    //noInfo: true,
    proxy: {
      '/Images/*': {
        target: 'https://rawgit.com/giorgio-casciaro/CivilStyle/master/', //target: 'https://rawgit.com/giorgio-casciaro/CivilStyle/master/',
        changeOrigin: true,
        //ignorePath:true,
        https: true
      }
    }
  },
};
