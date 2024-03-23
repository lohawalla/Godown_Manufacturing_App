import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import RadioButton from '../../atoms/RadioButton/RadioButton'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const NotificationCard = ({colour}:any) => {
    console.log(colour)
  return (
    <TouchableOpacity>
    <View style={styles.MainContainer}>
        <LinearGradient colors={['#0078FB29', '#0078FB0A']} style={styles.container}>
            <View style={styles.TopTitle}>
                <Text>26/02/24, 02:00pm</Text>
                <View style={[styles.check,{backgroundColor:colour}]}></View>
            </View>
            <Text style={styles.Name}>Work Order Number</Text>
        </LinearGradient>
    </View>
    </TouchableOpacity>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
    MainContainer:{
        alignItems:'center',
        padding:3,
    },
    container:{
        padding:8,
        width:'95%',
        borderWidth:2,
        borderRadius:10,
        borderColor:'white',
    },
    TopTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontWeight:600
    },
    Name:{
        marginTop:5,
        fontWeight:'bold',
        fontSize:18,
        color:'#1e293b'
    },
    check:{
        width:15,
        height:15,
        borderRadius:10,
        shadowColor: '#171717',
        elevation:5,
    }
})