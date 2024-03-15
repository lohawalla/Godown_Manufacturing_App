import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardSecondaryBtn = (props:{width:any}) => {
    let {width}=props
  return (
    <View style={[styles.TopTitle, styles.TopMarginLeft, {width:props.width}]}>
        <Text style={{color:'white'}} >Shelf code-5</Text>
    </View>
  )
}

export default CardSecondaryBtn

const styles = StyleSheet.create({
    TopTitle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        height:25,
        borderRadius:10,
        width:'90%',
        marginTop:10
    },
    TopMarginLeft:{ 
        marginLeft:30,
    },
})