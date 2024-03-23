import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PhotoSave from '../../components/molecules/PhotoSave/PhotoSave';

const PurchaseAislePhotoCapture = ({navigation, route}:any) => {
    const [showScanner, setShowScanner] = useState(false);
    const [scannedValue, setScannedValue] = useState(null);
    const handleScannedValue = (value: any) => {
        console.log('Scanned value:', value);
        setScannedValue(value);
        setShowScanner(false);
    };
    const navigateToNextScreen=(val:string)=>{
        navigation.navigate('PurchaseAislePhoto', {image:val})
    }
  return (
      <PhotoSave
        setShow={setShowScanner}
        setScannedValue={handleScannedValue}
        navigation={navigation}
        route={route}
        navigateToNextScreen={navigateToNextScreen}
      />
  )
}

export default PurchaseAislePhotoCapture

const styles = StyleSheet.create({
    container:{
        flex:0.5
    }
})