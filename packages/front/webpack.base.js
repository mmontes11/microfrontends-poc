module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", ["@babel/env", { targets: { browsers: ["last 2 versions"] } }]],
        },
      },
    ],
  },
};
