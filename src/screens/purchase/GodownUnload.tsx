import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemCard from '../../components/molecules/ItemCard/ItemCard'
import GodownNameCards from '../../components/molecules/GodownNameCard/GodownNameCard'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import SecondaryButton from '../../components/atoms/CustomButton/SecondaryButton'
import { useRoute } from '@react-navigation/native'
import PurchaseAislePhoto from './PurchaseAislePhoto'

const GodownUnload = ({navigation}:any) => {
  // const route = useRoute();
  // const { id }:any = route.params;
  // console.log(id)
  const openCamera=(value:String)=>{
    if(value=='confirm'){
      navigation.navigate('PurchaseAislePhotoCapture')
    }else{
      navigation.navigate('UnloadQR')
    }
  }
  return (
    <>
    <Navbar/>
    <View style={styles.component}>
      <View style={styles.title}>
        <Text>Aisle List</Text>
        <Text>Total Qunatity Unload(50)kg</Text>
      </View>
      <GodownNameCards/>
    </View>
    {/* <PurchaseAislePhoto/> */}
    <View style={styles.bottomButton}>
      <SecondaryButton width={220} backgroundColor={''} icon={null} color={''} text='Unload To Another' onPress={()=>openCamera('back')}/>
      <PrimaryButton width={120} text='Unload' onPress={()=>openCamera('confirm')}/>
    </View>
    </>
  )
}

export default GodownUnload

const styles = StyleSheet.create({
  component:{
    flex:1
  },
  bottomButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding:8,
    marginBottom:30
  },
  title:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  }
})