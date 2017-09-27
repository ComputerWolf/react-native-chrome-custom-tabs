'use strict';

var { Linking, NativeModules, Platform } = require('react-native');

if (Platform.OS == 'ios') {
  // Do nothing on iOS
  module.exports.launchCustomTab = function(url) {};
  module.exports.mayLaunchUrl = function(url) {};
}
else {
  module.exports = NativeModules.ChromeCustomTabsClient;
}
