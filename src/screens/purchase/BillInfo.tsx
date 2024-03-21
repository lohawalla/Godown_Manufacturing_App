import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import RawMaterialCard from '../../components/molecules/RawMaterialCard/RawMaterial'
import PartyListCard from '../../components/molecules/PartyListCard/PartyListCard'
import MaterialInfo from '../../components/molecules/RawMaterialCard/MaterialInfo'
import { useQuery } from '@tanstack/react-query'
import { fetchSalesBill } from '../../services/purchase/api'
import { useRoute } from '@react-navigation/native'
import { useSaleBill } from '../../services/purchase/hooks'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const BillInfo = ({ navigation }: any) => {

  const next=(val:number)=>{
    navigation.navigate("purchaseGodown")
  }
  
  const route = useRoute();
  const { id }:any = route.params;
  const {data, isError, error, isLoading}:any = useSaleBill({
    saleId:id
  });

  if(isLoading){
    return (
      <View>
        <Navbar/>
        <View style={{alignItems:'center'}}>
          <Text>Loading...</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View>
        <Navbar/>
        <RawMaterialCard data={data?.data}/>
        <PrimaryButton width={'96%'} text='Unload' onPress={()=>next(id)}/>
      </View>
    </SafeAreaView>
  )
}

export default BillInfo

const styles = StyleSheet.create({
    
})