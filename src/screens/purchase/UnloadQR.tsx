import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import QRAssign from '../Assign/QRAssign';
import CodeScannerPage from '../../components/molecules/Scanner/CodeScannerPage';

const PurchaseCamera = ({navigation, route}:any) => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedValue, setScannedValue] = useState(null);
  const handleScannedValue = (value: any) => {
    console.log('Scanned value:', value);
    setScannedValue(value);
    setShowScanner(false);
  };
  const navigateToNextScreen=()=>{
    navigation.navigate('purchaseGodown')
  }
  return (
        <CodeScannerPage
            setShow={setShowScanner}
            setScannedValue={handleScannedValue}
            navigation={navigation}
            route={route}
            navigateToNextScreen={navigateToNextScreen}
            title={'Scan QR Code to Assign'}
          />
  )
}

export default PurchaseCamera

const styles = StyleSheet.create({})