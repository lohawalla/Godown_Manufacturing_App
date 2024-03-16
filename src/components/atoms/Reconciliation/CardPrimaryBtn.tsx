import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const CardPrimaryBtn = (props:{width:any, primaryBtn:string}) => {
  return (
    <View style={[styles.TopTitle, styles.TopMarginRight, {width:props.width}]}>
        <Text style={{color:'white'}} >{props.primaryBtn}</Text>
    </View>
  )
}

export default CardPrimaryBtn

const styles = StyleSheet.create({
    TopTitle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        height:25,
        borderRadius:10,
        marginTop:10
    },
    TopMarginLeft:{ 
        marginLeft:30,
    },
    TopMarginRight:{
        marginRight:30,
    },
})