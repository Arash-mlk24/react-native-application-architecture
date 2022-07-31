const ios = require('@react-native-community/cli-platform-ios');
const android = require('@react-native-community/cli-platform-android');

module.exports = {
  assets: ['./src/res/assets/fonts'],
  
  platforms: {
    ios: {
      linkConfig: ios.linkConfig,
      projectConfig: ios.projectConfig,
      dependencyConfig: ios.dependencyConfig,      
    },
    android: {
      linkConfig: android.linkConfig,
      projectConfig: android.projectConfig,
      dependencyConfig: android.dependencyConfig,
    },
  },
};
