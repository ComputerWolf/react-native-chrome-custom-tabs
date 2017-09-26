'use strict';

var { Linking, NativeModules, Platform } = require('react-native');

if (Platform.OS == 'ios') {
  // Fall back to Linking.openURL on iOS.
  module.exports.launchCustomTab = Linking.openURL;
  module.exports.mayLaunchUrl = function(url) {};
}
else {
  module.exports = NativeModules.ChromeCustomTabsClient;
}
