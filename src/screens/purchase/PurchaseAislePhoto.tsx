import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PhotoSave from '../../components/molecules/PhotoSave/PhotoSave';

const PurchaseAislePhoto = ({navigation, route}: any) => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedValue, setScannedValue] = useState(null);
  const handleScannedValue = (value: any) => {
    console.log('Scanned value:', value);
    setScannedValue(value);
    setShowScanner(false);
  };
  const navigateToNextScreen = () => {
    navigation.navigate('CapturePhotoConfirmation');
  };
  return (
    <PhotoSave
      setShow={setShowScanner}
      setScannedValue={handleScannedValue}
      navigation={navigation}
      route={route}
      navigateToNextScreen={navigateToNextScreen}
    />
  );
};

export default PurchaseAislePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
});