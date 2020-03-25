import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {TouchableOpacity, Text, SafeAreaView, StyleSheet} from 'react-native';
import {PESDK} from 'react-native-photoeditorsdk';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={this._openGallery}
          style={styles.buttonGallery}>
          <Text style={styles.text}>Open gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._openCamera}
          style={styles.buttonCamera}>
          <Text style={styles.text}>Open camera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  _openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      PESDK.openEditor(image.path);
    });
  };

  _openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      PESDK.openEditor(image.path);
    });
  };
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  buttonGallery: {
    backgroundColor: '#7f78d2',
    borderWidth: 1,
    borderColor: '#4a47a3',
    padding: 10,
    margin: 10,
    width: 200,
  },
  buttonCamera: {
    backgroundColor: '#ad62aa',
    borderWidth: 1,
    borderColor: '#4a47a3',
    padding: 10,
    margin: 10,
    width: 200,
  },
});

export default App;
