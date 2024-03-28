import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import ToggleButton from '../../components/molecules/ToggleHeader/ToggleButton';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import PartyListCard from '../../components/molecules/PartyListCard/PartyListCard';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';
import InputWithSuggestion from '../../components/molecules/InputWithSuggestion/InputWithSuggestion';
import {useSalesList} from '../../services/purchase/hooks';

const CustomerPurchaseOrders = ({navigation}: any): JSX.Element => {
  const [nextScan, setNextScan] = useState(true);

  const {data, isError, error, isLoading} = useSalesList();

  const next = (val: number) => {
    navigation.navigate('PurchaseOrder', {id: val});
    console.log(val);
  };

  const opencamera = () => {
    navigation.navigate('UnloadQR');
  };
  if (isLoading)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <SafeAreaView>
      <Navbar />
      <Text style={styles.heading}>Party List</Text>
      <InputWithSuggestion setNextScan={setNextScan} />
      <View style={{padding: 12, height: '78%'}}>
        <FlatList
          data={data?.data}
          renderItem={({item}: any): JSX.Element => (
            <PartyListCard
              onPress={() => next(item._id)}
              primaryImage="https://shorturl.at/dlpDG"
              qrImage="https://rb.gy/m8zvbd"
              DateTime={item.createdAt.substring(0, 10)}
              Name={item.partyId.partyName}
              status="pending"
              billNumber={item?.billNumber}
              salesNumber={item?.salesNumber}
              purchaseNumber={item?.purchaseNumber || '24542'}
            />
          )}
          keyExtractor={item => item._id}
        />
      </View>
      {nextScan && (
        <View style={styles.scanImage}>
          <TouchableOpacity onPress={() => opencamera()}>
            <Image
              style={{borderRadius: 60}}
              source={require('../../assets/scannerImage.png')}
            />
          </TouchableOpacity>
        </View>
      )}

      {/* Primary Button */}
      {!nextScan && (
        <View style={{marginTop: -40}}>
          <PrimaryButton
            width={'96%'}
            text="Next"
            onPress={() => console.log(null)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CustomerPurchaseOrders;

const styles = StyleSheet.create({
  heading: {
    marginLeft: '4%',
    fontWeight: 'bold',
  },
  scanImage: {
    marginTop: -100,
    alignItems: 'flex-end',
  },
});
