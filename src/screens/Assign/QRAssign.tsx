import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {CodeScannerPage} from '../../components/molecules/Scanner/CodeScannerPage';

const QRAssign = ({navigation}: {navigation: any}) => {
  const [showScanner, setShowScanner] = useState(true); // State to control the visibility of the scanner
  const [scannedValue, setScannedValue] = useState(null); // State to store the scanned value

  const handleScannedValue = (value: any) => {
    // Handle the scanned value here as needed
    console.log('Scanned value:', value);
    // Scanned value: p4kf1041e6c0121
    // For example, you can update your database or perform any other action
    setScannedValue(value);
    setShowScanner(false); // Hide the scanner after scanning
  };

  return (
    <View style={styles.container}>
      {showScanner && (
        <CodeScannerPage
          setShow={setShowScanner}
          setScannedValue={handleScannedValue}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QRAssign;
