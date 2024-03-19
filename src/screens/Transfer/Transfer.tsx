import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import LinearGradient from 'react-native-linear-gradient'

const Transfer = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Navbar/>
            <View style={styles.mainComponent}>
            <LinearGradient
            colors={[
                '#E5F1FE',
                'white',
            ]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 0.01, y: 0.70 }}
            locations={[0.2, 1.3]}
            style={{
                width:'90%',
                backgroundColor:'#ccdaf7',
                height:'50%',
                borderRadius:10,
                borderWidth:1,
                borderColor:'#a6acb8'
            }}>
                {/* <View style={styles.component}> */}
                    <View style={styles.MainTitle}>
                        <Text style={styles.Heading}>Assign this QR Code to</Text>
                    </View>
                    <View style={styles.secondComponent}>
                        <Image style={styles.qr_image} source={{ uri: 'https://rb.gy/m8zvbd' }} />
                        <Text style={styles.primaryTitle}>QR Code No. </Text>
                        <Text style={styles.secondaryTitle}>A56D56</Text>
                    </View>
                    <View style={styles.thirdComponent}>
                        <Image style={styles.secondaryImage} source={require('../../assets/item.jpeg')} />
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.primaryTitle}>QR Code No. </Text>
                                <Text style={styles.secondaryTitle}>A56D56</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.primaryTitle}>QR Code No. </Text>
                                <Text style={styles.secondaryTitle}>A56D56</Text>
                            </View>
                        </View>
                    </View>
                {/* </View> */}
            </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default Transfer

const styles = StyleSheet.create({
    mainComponent:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    component:{
        width:'90%',
        backgroundColor:'#dce6f9',
        height:'50%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#a6acb8'
    },
    MainTitle:{
        alignItems:'center',
        marginTop:10,
    },
    Heading:{
        color:'#475569',
        fontSize:26,
        fontWeight:'bold'
    },
    secondComponent:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'40%'
    },
    qr_image:{
        width:100,
        height:100,
        marginRight:10
    },
    primaryTitle:{
        color:'#475569',
        fontWeight:'bold',
        fontSize:16
    },
    secondaryImage:{
        width:100,
        height:100,
        borderRadius:60,
        marginRight:10,
        fontSize:16
    },
    secondaryTitle:{
        fontSize:16
    },
    thirdComponent:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'40%',

    },
    row:{
        flexDirection:'row'
    }
})