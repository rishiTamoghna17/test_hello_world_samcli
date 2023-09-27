const path = require('path');

module.exports = {
  entry: {
    helloWorld: './hello-world/app.mjs',
    helloWorldTwo: './hello-world-two/app.mjs',
    helloWorldThree: './hello-world-three/app.mjs',

    
  },
  output: {
    filename: '[name]/bundle.js', 
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|mts)$/,
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  target: 'node',
  externals: [
    { '/opt/queries.js': 'commonjs /opt/queries.js' },
  ],
};