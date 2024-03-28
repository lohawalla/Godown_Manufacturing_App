import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import RawMaterialCard from '../../components/molecules/RawMaterialCard/RawMaterial'
import { useRoute } from '@react-navigation/native'
import { useSaleBill } from '../../services/purchase/hooks'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import { SafeAreaView } from 'react-native-safe-area-context'
const PurchaseOrder = ({ navigation }: any) => {

  const next=(val:number)=>{
    navigation.navigate("UnloadQR")
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
    <>
    <SafeAreaView>
      <View>
        <Navbar/>
        <RawMaterialCard data={data?.data}/>
        <PrimaryButton width={'96%'} text='Unload' onPress={()=>next(id)}/>
      </View>
    </SafeAreaView>
    </>
  )
}

export default PurchaseOrder

const styles = StyleSheet.create({
    
})