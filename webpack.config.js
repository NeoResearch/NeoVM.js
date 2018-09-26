module.exports = {
  mode : 'production',
  entry : './index.js',
  output: {
    library: 'neovm',
    libraryTarget: 'umd',
    filename: './bundle.js',
    auxiliaryComment: 'Test Comment'
  }
};
