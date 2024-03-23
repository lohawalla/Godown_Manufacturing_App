import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AssignConfirmCard from '../../components/molecules/AssignConfirmCard/AssignConfirmCard';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';
import {useMutation} from '@tanstack/react-query';
import {assignQrCodeAisle} from '../../services/aisle/apis';
import {AssignQrCodeAisleValue} from '../../services/aisle/types';
import axios from 'axios';
import {assignQrCodeAislePath} from '../../services/ApiRoutes';

const AssignConfirm = ({navigation, route}: {navigation: any; route: any}) => {
  const {godown, shelf, aisle, QRScannedValue} = route.params;

  const {mutateAsync} = useMutation({
    mutationFn: (sendValue: AssignQrCodeAisleValue) =>
      assignQrCodeAisle(sendValue),
    onSuccess: data => {
      if (data.success) {
        console.log('Data sent successfully', data);
      }
    },
  });

  // const funccc: any = async (sendData: any) => {
  //   try {
  //     console.log('entry Done');
  //     const response = await axios({
  //       method: 'post',
  //       url: assignQrCodeAislePath,
  //       data: sendData,
  //       withCredentials: true,
  //     });
  //     console.log('RESPONSE:', response.data);
  //     return response.data;
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // };

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
