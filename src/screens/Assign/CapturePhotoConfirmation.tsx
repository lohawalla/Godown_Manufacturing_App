import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import SecondaryButton from '../../components/atoms/CustomButton/SecondaryButton';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';
import {useRoute} from '@react-navigation/native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const CapturePhotoConfirmation = ({navigation, route}: any) => {
  const {godown, aisle, shelf, QRScannedValue, image}: any = route.params;
  console.log(aisle, QRScannedValue);

  const confirmPic = async () => {
    try {
      const photo = await CameraRoll.saveAsset(`file://${image}`, {
        // save image in gallery using cameraRoll
        type: 'photo',
      });
      Alert.alert('Success', 'Photo saved to gallery!');
      navigation.navigate('AssignConfirm', {
        godown,
        aisle,
        shelf,
        QRScannedValue,
        image,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo to gallery!');
    }
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.component}>
      <Text style={styles.title}>Photo Preview</Text>
      <Image style={styles.image} source={{uri: 'file://' + image}} />
      <View style={styles.bottomButton}>
        <SecondaryButton
          width={130}
          backgroundColor={''}
          icon={null}
          color={''}
          text="Retake"
          onPress={goBack}
        />
        <PrimaryButton width={120} text="Confirm" onPress={confirmPic} />
      </View>
    </View>
  );
};

export default CapturePhotoConfirmation;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '40%',
    marginBottom: 10,
  },
  image: {
    width: '90%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    height: 340,
    backgroundColor: 'white',
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
    marginTop: '37%',
  },
});
