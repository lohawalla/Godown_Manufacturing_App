import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CodeScannerPage from '../../components/molecules/Scanner/CodeScannerPage';

const CapturePhoto = ({navigation, route}: {navigation: any; route: any}) => {
  const [showCamera, setShowCamera] = useState(true);
  const [scannedValue, setScannedValue] = useState(null);

  const {godown, aisle, shelf, QRScannedValue} = route.params;

  const handleScannedValue = (value: any) => {
    console.log('Scanned value:', value);
  };

  const navigateToNextScreen = (value: string) => {
    navigation.navigate('CapturePhotoConfirmation', {
      godown,
      aisle,
      shelf,
      QRScannedValue: value,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Capture Aisle Photo</Text>
      </View>
      <View style={styles.container}>
        {showCamera && (
          <CodeScannerPage
            setShow={setShowCamera}
            setScannedValue={handleScannedValue}
            navigation={navigation}
            route={route}
            navigateToNextScreen={navigateToNextScreen}
          />
        )}
      </View>
    </View>
  );
};

export default CapturePhoto;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
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
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
