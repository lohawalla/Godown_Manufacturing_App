import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ToggleButton from '../../components/molecules/ToggleHeader/ToggleButton'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import PartyListCard from '../../components/molecules/PartyListCard/PartyListCard'
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton'
import InputWithSuggestion from '../../components/molecules/InputWithSuggestion/InputWithSuggestion'
import { fetchSalesData } from '../../services/purchase/api'

const Purchase = ({navigation}:any):JSX.Element => {
  const [toggleBtn, setToggleBtn]=useState(true)
    const toggleView=(val:boolean):void=>{ 
        setToggleBtn(val)
    }

  const { isPending, error, data }:any = useQuery({
    queryKey: ['salesBillList'],
      queryFn: fetchSalesData
    })
  function next(){
    navigation.navigate("BillInfo")
  }

  return (
    <SafeAreaView>
      <Navbar/>
      <ToggleButton titleOne={'Sales'} titleTwo={"Purchase"} toggleView={toggleView} toggleBtn={toggleBtn}/>
        <Text style={styles.heading}>Party List</Text>
        <InputWithSuggestion/>
      {toggleBtn && <View style={{padding:12, height:'65%'}}>
            <FlatList
            data={data?.data}
            renderItem={({item}:any):JSX.Element => <PartyListCard onPress={next} primaryImage='https://shorturl.at/dlpDG' qrImage='https://rb.gy/m8zvbd' DateTime={item.createdAt.substring(0, 10)} Name={item.partyId.partyName.substring(0, 13)+'...'} status='pending' billNumber={item?.billNumber} salesNumber={item?.salesNumber} purchaseNumber={item?.purchaseNumber}/>}
            keyExtractor={item => item._id}
            />
        </View>}
        {/* {!toggleBtn && <View style={{padding:12, height:'65%'}}>
            <FlatList
            data={data?.data.products}
            renderItem={({item}:any):JSX.Element => <PartyListCard primaryImage='https://shorturl.at/dlpDG' qrImage='https://rb.gy/m8zvbd' DateTime='07/10/23, 02:00pm' Name='danish' status='pending' />}
            keyExtractor={item => item.id}
            />
        </View>} */}
          <PrimaryButton width={300} text='Next' onPress={next}/>

    </SafeAreaView>
  )
}

export default Purchase

const styles = StyleSheet.create({
  heading:{
    marginLeft:'4%',
    fontWeight:'bold'
  }
})