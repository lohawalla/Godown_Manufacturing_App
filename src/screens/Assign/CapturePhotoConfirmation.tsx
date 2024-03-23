import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryButton from '../../components/atoms/CustomButton/SecondaryButton';

const CapturePhotoConfirmation = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {godown, shelf, aisle, QRScannedValue, capturedImageData} =
    route.params;

  const handleRetake = () => {};

  const handleConfirm = () => {
    navigation.navigate('AssignConfirm', {
      godown,
      shelf,
      aisle,
      QRScannedValue,
      capturedImageData,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Photo Preview</Text>
      <View style={styles.container}>
        <Image
          source={{uri: `data:image/jpeg;base64,${capturedImageData}`}}
          style={{width: 400, height: 400}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          text="Retake"
          backgroundColor="white"
          color="rgba(30, 41, 59, 1)"
          width={150}
          onPress={handleRetake}
          icon={{name: 'retweet', size: 25, color: 'rgba(30, 41, 59, 1)'}}
        />
        <SecondaryButton
          text="Confirm"
          backgroundColor="rgba(30, 41, 59, 1)"
          color="white"
          width={150}
          onPress={handleConfirm}
          icon={{name: 'check', size: 25, color: 'white'}}
        />
      </View>
    </View>
  );
};

export default CapturePhotoConfirmation;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.5,
    width: '90%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 50,
  },
  image: {
    width: 300,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
