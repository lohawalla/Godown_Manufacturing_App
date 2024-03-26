import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ConfirmationDialogeTwo from '../../components/molecules/Confirmation/ConfirmationDialogeTwo'

const PurchaseUnload = ({navigation}:any) => {
  const handleSuccess=(val:String)=>{
    if(val=='Done'){
      navigation.navigate('CustomerList')
    }else{
      navigation.navigate('PurchaseList')
    }
  }
  return (
    <>
    <View style={styles.mainContainer}>
      <ConfirmationDialogeTwo task='Loading Start Successfully' successMessage='Click Done to Confirm' handleSuccess={handleSuccess}/>
    </View>
    </>
  )
}

export default PurchaseUnload

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#303132'
  }
})