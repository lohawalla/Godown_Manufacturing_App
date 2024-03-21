import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {CodeScannerPage} from '../../components/molecules/Scanner/CodeScannerPage';

const QRAssign = ({navigation, route}: {navigation: any; route: any}) => {
  const [showScanner, setShowScanner] = useState(true);
  const [scannedValue, setScannedValue] = useState(null); // State to store the scanned value

  const {godown, aisle, shelf} = route.params;
  console.log('DATA IN QRAssign:', godown, aisle, shelf);

  const handleScannedValue = (value: any) => {
    console.log('Scanned value:', value);
    // Scanned value: p4kf1041e6c0121
    setScannedValue(value);
    setShowScanner(false);
  };

  return (
    <View style={styles.container}>
      {showScanner && (
        <CodeScannerPage
          setShow={setShowScanner}
          setScannedValue={handleScannedValue}
          navigation={navigation}
          onScanComplete={() =>
            navigation.navigate('AssignConfirm', {
              godown,
              aisle,
              shelf,
              QRValue: scannedValue,
            })
          }
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
