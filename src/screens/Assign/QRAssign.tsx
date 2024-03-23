import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import CodeScannerPage from '../../components/molecules/Scanner/CodeScannerPage';

const QRAssign = ({navigation, route}: {navigation: any; route: any}) => {
  const [showScanner, setShowScanner] = useState(true);
  const [scannedValue, setScannedValue] = useState(null);

  const {godown, aisle, shelf} = route.params;

  const handleScannedValue = (value: any) => {
    setScannedValue(value);
    setShowScanner(false);
  };

  const navigateToNextScreen = (value: string) => {
    navigation.navigate('CapturePhoto', {
      godown,
      aisle,
      shelf,
      QRScannedValue: value,
    });
  };

  return (
    <CodeScannerPage
      setShow={setShowScanner}
      setScannedValue={handleScannedValue}
      navigation={navigation}
      route={route}
      navigateToNextScreen={navigateToNextScreen}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  container: {
    flex: 0.5,
    width: '90%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 10,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default QRAssign;
