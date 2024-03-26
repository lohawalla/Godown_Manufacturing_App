import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ConfirmationDialogeOne from '../../components/molecules/Confirmation/ConfirmationDialogOne';

const ConfirmDialogue = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <ConfirmationDialogeOne
        task="QR Assign"
        successMessage="Successfully"
        navigation={navigation}
      />
    </View>
  );
};

export default ConfirmDialogue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
