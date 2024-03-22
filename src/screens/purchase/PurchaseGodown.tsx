import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemCard from '../../components/molecules/ItemCard/ItemCard'
import GodownNameCards from '../../components/molecules/GodownNameCard/GodownNameCard'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import SecondaryButton from '../../components/atoms/CustomButton/SecondaryButton'
import { useRoute } from '@react-navigation/native'
import PurchaseAislePhoto from './PurchaseAislePhoto'

const PurchaseGodown = ({navigation}:any) => {
  // const route = useRoute();
  // const { id }:any = route.params;
  // console.log(id)
  const openCamera=()=>{
    navigation.navigate('PurchaseAislePhotoCapture')
  }
  return (
    <>
    <Navbar/>
    <View style={styles.component}>
      <GodownNameCards/>
    </View>
    {/* <PurchaseAislePhoto/> */}
    <View style={styles.bottomButton}>
      <SecondaryButton width={220} backgroundColor={''} icon={null} color={''} text='Unload To Another' onPress={()=>console.log(null)}/>
      <PrimaryButton width={120} text='Unload' onPress={()=>openCamera()}/>
    </View>
    </>
  )
}

export default PurchaseGodown

const styles = StyleSheet.create({
  component:{
    flex:1
  },
  bottomButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding:8
  }
})