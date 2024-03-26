import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const GodownNameCards = () => {
    return (
        <LinearGradient colors={['#0078FB29','#0078FB0A']} style={{borderRadius:14,borderWidth:1,borderColor:'white',paddingVertical:10,paddingHorizontal:12,margin:10}}>
            <View style={{marginBottom:10,flexDirection:'column'}}>
                <View>
                    <Text style={{fontWeight:'700',fontSize:18,lineHeight:18.67,color:'#1E293B'}}>Godown Name</Text>
                </View>
                <View style={{justifyContent:'space-between',marginTop:5,flexDirection:'row'}}>
                    <Text style={{color:'#475569'}}>G.CODE</Text>
                    <Text style={{color:'#475569'}}>G.CODE</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#1E293B'}}> Actual Quantity</Text>
                    <Text style={{fontWeight:'700',fontSize:16,lineHeight:18.67,color:'#475569'}}>120 KG</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#1E293B'}}>Inward Quantity</Text>
                    <Text style={{fontWeight:'700',fontSize:16,lineHeight:18.67,color:'#475569'}}>50 KG</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default GodownNameCards