import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryButton from '../../components/atoms/CustomButton/SecondaryButton';

const CapturePhotoConfirmation = () => {
  const handleRetake = () => {
    console.log('retake button clicked');
  };
  return (
    <View>
      <Text>CapturePhotoConfirmation</Text>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          text="Retake"
          backgroundColor="white"
          color="rgba(30, 41, 59, 1)"
          width={200}
          onPress={handleRetake}
          icon={{name: 'retweet', size: 10, color: 'rgba(30, 41, 59, 1)'}}
        />
        <SecondaryButton
          text="Confirm"
          backgroundColor="rgba(30, 41, 59, 1)"
          color="black"
          width={200}
          onPress={handleRetake}
          icon={{name: 'check', size: 10, color: 'white'}}
        />
      </View>
    </View>
  );
};

export default CapturePhotoConfirmation;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
});
