module.exports = {
  staticFileGlobs: [
    'index.html',
    'src/main.css',
    'assets/images/**.*'
  ],
  runtimeCaching: [{
    urlPattern: /^http:\/\/localhost:3000/,
    handler: 'networkFirst'
  }],
  swFile: 'sw-generated.js'
};
