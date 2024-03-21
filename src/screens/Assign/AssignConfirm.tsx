import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AssignConfirmCard from '../../components/molecules/AssignConfirmCard/AssignConfirmCard';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';

const AssignConfirm = ({navigation, route}: {navigation: any; route: any}) => {
  const {godown, shelf, aisle, QRScannedValue} = route.params;

  console.log('DATA IN ASSIGNCONFIRM:', godown, shelf, aisle, QRScannedValue);

  const handleAssign = () => {
    navigation.navigate('ConfirmDialogue');
    console.log('QR Assigned');
  };

  return (
    <View style={styles.container}>
      <AssignConfirmCard
        shelfCode={shelf?.code}
        aisleCode={aisle?.code}
        image={require('../../theme/assets/sales.png')}
        aisleImage={require('../../theme/assets/sales.png')}
      />
      <View style={styles.button}>
        <PrimaryButton text="Assign" width={328} onPress={handleAssign} />
      </View>
    </View>
  );
};

export default AssignConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 20,
    marginLeft: 15,
  },
});
