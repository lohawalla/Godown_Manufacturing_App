import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import QRAssign from '../Assign/QRAssign';
import { CodeScannerPage } from '../../components/molecules/Scanner/CodeScannerPage';

const PurchaseCamera = ({navigation}:any) => {
  const [show, setShow] = useState(false);
  const [scannedValue, setScannedValue] = useState(null);
  return (
        <CodeScannerPage
            setShow={setShow}
            setScannedValue={setScannedValue}
            navigation={navigation}
            type='Purchase'
            godown="abc"
          />
  )
}

export default PurchaseCamera

const styles = StyleSheet.create({})