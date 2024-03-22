import * as React from 'react';
import {useCallback, useRef, useState} from 'react';
import {
  Alert,
  AlertButton,
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Code,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/core';
import {Routes} from '../../../types/Routes';
import useIsForeground from '../../../theme/hooks/useIsForeground';
import {StatusBarBlurBackground} from '../../../theme/Views/StatusBarBlurBackground';
import {
  CONTENT_SPACING,
  CONTROL_BUTTON_SIZE,
  SAFE_AREA_PADDING,
} from '../../../theme/Views/Constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const PhotoSave = ({
  setShow,
  setCapturedImageData,
  navigation,
  navigateToNextScreen,
}: any) => {
  const camera: any = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;
  const [torch, setTorch] = useState(false);
  const isShowingAlert = useRef(false);

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Unable to read result as string'));
        }
      };
      reader.readAsDataURL(blob);
    });
  };

  const capturePhoto = async () => {
    try {
      const file = await camera.current.takePhoto();
      const result = await fetch(`file://${file.path}`);
      const blobData = await result.blob();
      const base64Data = await blobToBase64(blobData);
      await CameraRoll.saveAsset(`file://${file.path}`, {
        type: 'photo',
      });

      Alert.alert('Success', 'Photo saved to gallery!');
      setCapturedImageData(base64Data);

      navigateToNextScreen();
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo to gallery!');
      console.error(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Capture Photo</Text>
      </View>
      <View style={styles.container}>
        {device != null && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            torch={torch ? 'on' : 'off'}
            enableZoomGesture={true}
            ref={camera}
            photo={true}
          />
        )}
        <StatusBarBlurBackground />
        <View style={styles.rightButtonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTorch(!torch)}>
            <IonIcon
              name={torch ? 'flash' : 'flash-off'}
              color="white"
              size={24}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <IonIcon name="chevron-back" color="white" size={35} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={capturePhoto} style={styles.cameraImage}>
        <Image source={require('../../../assets/Camera.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImage: {
    marginTop: 20,
  },
  container: {
    flex: 0.5,
    width: '90%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  button: {
    marginBottom: CONTENT_SPACING,
    width: CONTROL_BUTTON_SIZE,
    height: CONTROL_BUTTON_SIZE,
    borderRadius: CONTROL_BUTTON_SIZE / 2,
    backgroundColor: 'rgba(140, 140, 140, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtonRow: {
    position: 'absolute',
    right: SAFE_AREA_PADDING.paddingRight,
    top: SAFE_AREA_PADDING.paddingTop,
  },
  backButton: {
    position: 'absolute',
    left: SAFE_AREA_PADDING.paddingLeft,
    top: SAFE_AREA_PADDING.paddingTop,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textContainer: {
    marginVertical: 10,
  },
});

export default PhotoSave;
