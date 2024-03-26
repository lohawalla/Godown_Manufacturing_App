import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssignConfirmCard from '../../components/molecules/AssignConfirmCard/AssignConfirmCard';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';
import {useMutation} from '@tanstack/react-query';
import {assignQrCodeAisle} from '../../services/aisle/apis';
import {AssignQrCodeAisleValue} from '../../services/aisle/types';

const AssignConfirm = ({navigation, route}: {navigation: any; route: any}) => {
  const {godown, aisle, shelf, QRScannedValue, image} = route.params;

  const {mutateAsync} = useMutation({
    mutationFn: (sendValue: AssignQrCodeAisleValue) =>
      assignQrCodeAisle(sendValue),
    onSuccess: data => {
      if (data.success) {
        console.log('Data sent successfully', data);
      }
    },
  });

  const handleAssign = () => {
    if (QRScannedValue) {
      navigation.navigate('ConfirmDialogue');
      mutateAsync({
        aisleCode: aisle.code,
        qrCodeData: QRScannedValue,
      });
    } else {
      console.error('QR Scanned value is missing');
    }
  };

  return (
    <View style={styles.container}>
      <AssignConfirmCard
        shelfCode={shelf?.code}
        aisleCode={aisle?.code}
        image={require('../../theme/assets/qr.png')}
        aisleImage={{uri: `file://${image}`}}
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
