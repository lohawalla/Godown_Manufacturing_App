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
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Scan QR Code to assign</Text>
      </View>
      <View style={styles.container}>
        {showScanner && (
          <CodeScannerPage
            setShow={setShowScanner}
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

export default QRAssign;
