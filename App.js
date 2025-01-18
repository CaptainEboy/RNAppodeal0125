import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appodeal,
  AppodealAdType
} from 'react-native-appodeal';

const adTypes = AppodealAdType.INTERSTITIAL | AppodealAdType.REWARDED_VIDEO | AppodealAdType.BANNER;
Appodeal.initialize('a5113f732b3f6a6e7a74d38ab11b4c5edcde3f856ea17555', adTypes)




export default function App() { 
  // Appodeal.addEventListener(AppodealBannerEvent.SHOWN, () =>
  //     console.log("Banner shown")
  // );
  // Appodeal.addEventListener(AppodealBannerEvent.EXPIRED, () =>
  //     console.log("Banner expired")
  // );
  // Appodeal.addEventListener(AppodealBannerEvent.CLICKED, () =>
  //     console.log("Banner was clicked")
  // );
  // Appodeal.addEventListener(AppodealBannerEvent.FAILED_TO_LOAD, () =>
  //     console.log("Banner failed to load")
  // );

  // Show interstitial for specific pacement
Appodeal.show(AppodealAdType.INTERSTITIAL)

//Show banner at the top of screen
Appodeal.show(AppodealAdType.BANNER_BOTTOM)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
