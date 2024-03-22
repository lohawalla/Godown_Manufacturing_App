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
  setScannedValue,
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

  const capturePhoto = async () => {
    console.log('PhotoSave');
    try {
      const photo = await camera.current.takePhoto({
        quality: 'high',
        base64: true,
      });
      console.log(photo);
      await CameraRoll.saveAsset(`photo://${photo.path}`, {
        type: 'photo',
      });
      Alert.alert('Success', 'Photo saved to gallery!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo to gallery!');
      console.error(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
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
        <Image source={require('../../../theme/assets/camera-fill.png')} />
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
});

export default PhotoSave;
