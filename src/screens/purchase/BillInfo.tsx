import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import RawMaterialCard from '../../components/molecules/RawMaterialCard/RawMaterial'
import PartyListCard from '../../components/molecules/PartyListCard/PartyListCard'
import MaterialInfo from '../../components/molecules/RawMaterialCard/MaterialInfo'
import { useQuery } from '@tanstack/react-query'
import { fetchSalesBill } from '../../services/purchase/api'

const BillInfo = ({ navigation }: any) => {
    const { isPending, error, data }:any = useQuery({
        queryKey: ['fetchBill'],
          queryFn: fetchSalesBill
        })
        console.log(data)
  return (
    <View>
      <Navbar/>
      <RawMaterialCard />
    </View>
  )
}

export default BillInfo

const styles = StyleSheet.create({
    
})