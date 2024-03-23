<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React from 'react'
import SecondaryButton from '../../components/atoms/CustomButton/SecondaryButton'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import { useRoute } from '@react-navigation/native'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'

const PurchaseAislePhoto = ({navigation}:any) => {
    const route = useRoute();
  const { image }:any = route.params;

  const confirmPic=async()=>{
    try {
        const photo = await CameraRoll.saveAsset(`file://${image}`, { // save image in gallery using cameraRoll
              type: 'photo',
            })
        Alert.alert('Success', 'Photo saved to gallery!');
    } catch (error) {
        Alert.alert('Error', 'Failed to save photo to gallery!');
    }
  }

  const goBack=()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.component}>
        <Text style={styles.title}>Capture Aisle Photo</Text>
        <Image style={styles.image} source={{uri:'file://'+image}}/>
            <View style={styles.bottomButton}>
                <SecondaryButton width={130} backgroundColor={''} icon={null} color={''} text='Retake' onPress={goBack}/>
                <PrimaryButton width={120} text='Confirm' onPress={confirmPic}/>
            </View>
    </View>
  )
}
>>>>>>> bd3c0cf313044e37a3a3f7305a16f1aba5e72019

export default PurchaseAislePhoto;

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 0.5,
  },
});
=======
    component:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    title:{ 
        fontSize:32,
        fontWeight:'bold',
        color:'black',
        marginTop:'40%',
        marginBottom:10
    },
    image:{
        width:'90%',
        borderWidth:2,
        borderColor:'black',
        borderRadius:10,
        height:340,
        backgroundColor:'white'
    },
    bottomButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding:8,
        marginTop:'37%'
    }
})
>>>>>>> bd3c0cf313044e37a3a3f7305a16f1aba5e72019
