import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {TouchableOpacity, Text, SafeAreaView, StyleSheet} from 'react-native';
import {PESDK} from 'react-native-photoeditorsdk';
import {VESDK} from 'react-native-videoeditorsdk';

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
        <TouchableOpacity onPress={this._openVideo} style={styles.buttonVideo}>
          <Text style={styles.text}>Open video camera</Text>
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
      cropping: false,
    }).then(image => {
      PESDK.openEditor(image.path);
    });
  };

  _openVideo = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      VESDK.openEditor(image.path);
    });
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
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
  buttonVideo: {
    backgroundColor: '#f67280',
    borderWidth: 1,
    borderColor: '#4a47a3',
    padding: 10,
    margin: 10,
    width: 200,
  },
});

export default App;
