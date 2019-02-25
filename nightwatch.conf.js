module.exports = (function(settings) {
  settings.test_workers = false;
  src_folders: ["tests"]
  firefox: {
    desiredCapabilities: {
      browserName: 'firefox';
      javascriptEnabled: true;
      acceptSslCerts: true;
      nativeEvents: true
    }
  };

  return settings;
})(require('./nightwatch.json'));

