import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  Button,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import avatar from './assets/pngegg.png';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  const [image, setImage] = React.useState(avatar);
  const {height, width} = useWindowDimensions();

  async function openCamera() {
    const result = await launchCamera({quality: 1, mediaType: 'photo'});
    console.log(result);
    result.assets.map(asset => {
      return setImage(asset);
    });
  }
  async function openLibrary() {
    const result = await launchImageLibrary({mediaType: 'photo', quality: 1});
    // console.log(result.assets);
    result.assets.map(asset => {
      return setImage(asset);
    });
    console.log(image);
  }

  return (
    <SafeAreaView style={{...styles.container, height: height}}>
      <ScrollView>
        <Image
          style={{height: height * 0.3, width: width * 0.5}}
          source={image}
          resizeMode="contain"
        />
        <Text>Select Image</Text>
        <Button onPress={openCamera} title="Camera" />
        <View style={styles.sizedBox} />
        <Button onPress={openLibrary} title="Library" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sizedBox: {
    marginTop: 15,
  },
  highlight: {
    fontWeight: '650',
  },
});

export default App;
