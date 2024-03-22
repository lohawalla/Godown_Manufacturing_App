import * as React from 'react';
import {useCallback, useRef, useState} from 'react';
import {Alert, AlertButton, Linking, StyleSheet, View, Image} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  CONTENT_SPACING,
  CONTROL_BUTTON_SIZE,
  SAFE_AREA_PADDING,
} from '../../../theme/Views/Constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IonIcon from 'react-native-vector-icons/Ionicons';
 
// const showCodeAlert = (value: string, onDismissed: () => void): void => {
//     const buttons: AlertButton[] = [
//         {
//             text: 'Close',
//             style: 'cancel',
//             onPress: onDismissed,
//         },
//     ]
//     if (value.startsWith('http')) {
//         buttons.push({
//             text: 'Open URL',
//             onPress: () => {
//                 Linking.openURL(value)
//                 onDismissed()
//             },
//         })
//     }
//     Alert.alert('Scanned Code', value, buttons)
// }
 
type Props = NativeStackScreenProps<Routes, 'CodeScannerPage'> & {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setScannedValue: React.Dispatch<React.SetStateAction<string | null>>;
  navigateToNextScreen: (value: string) => void; // Callback function to navigate to the next screen
};
const CodeScannerPage: React.FC<Props> = ({
  setShow,
  setScannedValue,
  navigation,
  navigateToNextScreen, // Callback function received as prop
}: Props) => {
  const device = useCameraDevice('back');
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;
  const [torch, setTorch] = useState(false);
  const isShowingAlert = useRef(false);
 
  const onCodeScanned = useCallback(
    (codes: Code[]) => {
      console.log(`Scanned ${codes.length} codes:`, codes);
      setScannedValue(codes[0].value!);
      setShow(false);
      const value = codes[0]?.value;
      if (value == null || isShowingAlert.current) return;
 
      navigateToNextScreen(value); // Call the callback function to navigate to the next screen with additional data
      isShowingAlert.current = true;
    },
    [navigateToNextScreen],
  );
 
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  });
 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {device != null && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            codeScanner={codeScanner}
            torch={torch ? 'on' : 'off'}
            enableZoomGesture={true}
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
      <TouchableOpacity
          style={styles.TorchButton}
          onPress={() => setTorch(!torch)}
      >
      <Image source={require('../../../assets/Torch.png')}/>
        </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#333333'
  },
  container: {
    flex: 0.55,
    backgroundColor: 'red',
    width:'90%',
    borderWidth:5,
    borderColor:'#e2e8f0',
    borderRadius:10
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
  TorchButton:{
    marginTop:20
  }
});
 
export default CodeScannerPage;
 