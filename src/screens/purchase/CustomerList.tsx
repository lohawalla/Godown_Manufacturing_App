import { StyleSheet, Text, View,Button, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomerListCard from '../../components/molecules/PurchaseOrderList/CustomerListCard'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import InputWithSuggestion from '../../components/molecules/InputWithSuggestion/InputWithSuggestion'
import { usePurchaseParties, useSalesList } from '../../services/purchase/hooks'

const CustomerList = ({navigation}:any):JSX.Element => {
  const [nextScan, setNextScan] = useState(true)


  const {data, isError, error, isLoading} = usePurchaseParties();
  // console.log('------->>>>>>>>> purchase parties',data?.result?.data)

  const next=(val:number)=>{
    navigation.navigate("CustomerPurchaseOrders", {id:val})
  }
  
  const opencamera=()=>{
    navigation.navigate("UnloadQR")
  }
  if (isLoading)
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Loading...</Text>
      </View>
    );


  return (
    <SafeAreaView>
      <Navbar/>
        <InputWithSuggestion title={'Choose Customer.... |'} setNextScan={setNextScan}/>
        <Text style={styles.heading}>Customer List</Text>
      <View style={{padding:12, height:'75%'}}>
            <FlatList
            data={data?.result?.data}
            renderItem={({item}:any):JSX.Element => <CustomerListCard onPress={()=>next(item._id)} primaryImage='https://shorturl.at/dlpDG' partyCode={item.partyCode}  Name={item.partyName.substring(0, 13)+'...'}/>}
            keyExtractor={item => item._id}
            />
        </View>
          {nextScan && <View style={styles.scanImage}>
            <TouchableOpacity onPress={()=>opencamera()}>
              <Image
              style={{borderRadius:60}}
                source={require('../../assets/scannerImage.png')}
              />
            </TouchableOpacity>
          </View>}


          {/* Primary Button */}
        {!nextScan && <View style={{marginTop:-40}}>
          <PrimaryButton width={'96%'} text='Next' onPress={()=>console.log(null)}/>
        </View>}
    </SafeAreaView>
  )
}

export default CustomerList

const styles = StyleSheet.create({
  heading:{
    marginLeft:'4%',
    fontWeight:'bold',
    marginTop:10,
    fontSize:18
  },
  scanImage:{
    marginTop:-100,
    alignItems:'flex-end',
  }
})