import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../Navbar/Navbar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ReconciliationCard from '../../components/molecules/ReconciliationCard/ReconciliationCard'
import ToggleButton from '../../components/molecules/ToggleHeader/ToggleButton'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const DATA = [
      {
        id: '1',
      },
      {
        id: '2',
      },
      {
        id: '3',
      },
      {
        id: '4',
      },
      {
        id: '5',
      },
      {
        id: '6',
      },
      {
        id: '7',
      },
      {
        id: '8',
      },
      {
        id: '9',
      },
      {
        id: '10',
      },
      {
        id: '11',
      },
      {
        id: '12',
      },
      {
        id: '13',
      },
      {
        id: '14',
      },

  ];

const Page1 = ({ navigation }: any):JSX.Element => {
    //create a parent function where we can pass data to child components like ToggleBtn
    const [toggleBtn, setToggleBtn]=useState(true)
    const toggleView=(val:boolean):void=>{ 
        setToggleBtn(val)
    }

    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      return response
    };

    const { isPending, error, data }:any = useQuery({
      queryKey: ['reconcileData'],
      queryFn: fetchData
    })

  console.log(data?.data.products[0].title)
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <Navbar/>
        <ToggleButton titleOne={'Pending Request'} titleTwo={"Approved Request"} toggleView={toggleView} toggleBtn={toggleBtn}/>

       {toggleBtn && <View>
            <FlatList
            data={data?.data.products}
            renderItem={({item}:any):JSX.Element => <ReconciliationCard primaryBtn={"Shelf No. S-509s"} secondaryBtn={"Shelf code-5"} aisleNumber={"Aisle Number"} aisleCode={"Aisle Code"} scode={"S-012"} scodetwo={"s-014"} theme="#d0e4fa"/>}
            keyExtractor={item => item.id}
            />
        </View>}

        {!toggleBtn && <View>
            <FlatList
            data={DATA}
            renderItem={({item}:any):JSX.Element => <ReconciliationCard primaryBtn={"Shelf No. S-509s"} secondaryBtn={"Shelf code-5"} aisleNumber={"Aisle Number"} aisleCode={"Aisle Code"} scode={"S-012"} scodetwo={"s-014"} theme="#c7e5df"/>}
            keyExtractor={item => item.id}
            />
        </View>}
        <Button
            title='Go to Home'
            onPress={() => navigation.goBack()}
        />
    </SafeAreaView>
  )
}

export default Page1

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    toggleContainer:{
        padding:5,
        width:'90%',
        flexDirection:'row',
        backgroundColor:'#bfc5ce',
        justifyContent:'space-evenly',
        borderRadius:35
    },
    buttonText:{
        fontSize:14,
        fontWeight:'400',
        color:'white',
        textAlign:'center'
    },
    toggleBtn:{
        backgroundColor:"#1e293b",
        padding:14,
        width:'50%',
        borderRadius:50,
    },
    btnBackground:{
        backgroundColor:'#bfc5ce'
    }
})