import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PhotoSave from '../../components/molecules/PhotoSave/PhotoSave';

const CapturePhoto = ({navigation, route}: any) => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedValue, setScannedValue] = useState(null);
  const [capturedImageData, setCapturedImageData] = useState(null);
  const {godown, shelf, aisle, QRScannedValue} = route.params;
  const handleScannedValue = (value: any) => {
    setScannedValue(value);
    setShowScanner(false);
  };
  const navigateToNextScreen = () => {
    navigation.navigate('CapturePhotoConfirmation', {
      godown,
      shelf,
      aisle,
      QRScannedValue,
      capturedImageData,
    });
  };

  return (
    <PhotoSave
      setShow={setShowScanner}
      setScannedValue={handleScannedValue}
      navigation={navigation}
      route={route}
      navigateToNextScreen={navigateToNextScreen}
      setCapturedImageData={setCapturedImageData}
    />
  );
};

export default CapturePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
});
