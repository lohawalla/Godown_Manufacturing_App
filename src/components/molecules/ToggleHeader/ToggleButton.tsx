import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Navbar } from '../../../screens'


const ToggleButton = (props:{titleOne:String,titleTwo:String, toggleView:any, toggleBtn:boolean}):JSX.Element => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <View style={[styles.toggleBtn, !props.toggleBtn &&  styles.btnBackground]}>
                    <TouchableOpacity onPress={()=>props.toggleView(true)}>
                        <Text style={styles.buttonText}>{props.titleOne}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.toggleBtn, props.toggleBtn &&  styles.btnBackground]}>
                    <TouchableOpacity onPress={()=>props.toggleView(false)}>
                        <Text style={styles.buttonText}>{props.titleTwo}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ToggleButton

const styles = StyleSheet.create({
    mainContainer:{
        height:65
    },
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