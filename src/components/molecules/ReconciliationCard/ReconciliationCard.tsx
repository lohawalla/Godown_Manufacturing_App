import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CardPrimaryBtn from '../../atoms/Reconciliation/CardPrimaryBtn'
import CardSecondaryBtn from '../../atoms/Reconciliation/CardSecondaryBtn'

const ReconciliationCard = (props:{theme:string}) => {
    let {theme}=props
  return (
    <View style={styles.mainContainer}>
        <LinearGradient
                colors={[
                    theme,
                    'white',
                ]}
                start={{ x: 0.02, y: 0.03 }}
                end={{ x: 0.01, y: 1.1 }}
                locations={[0.02, 1.7]}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    width: 348, height: 130,
                    borderRadius: 15,
                    borderColor: '#FFFFFF21',
                    shadowColor: "gray",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.02,
                    shadowRadius: 4.59,
                    elevation: 2,
                    zIndex: 1
                }}
            >
                    <View style={styles.container}>
                        <CardPrimaryBtn width="90%"/>
                        <CardSecondaryBtn width="90%"/>
                    </View>
                    <View style={[styles.container, styles.middleTitle]}>
                        <Text style={styles.AisleTitle}>Aisle Number</Text>
                        <Text style={styles.AisleTitle}>Aisle Code</Text>
                    </View>
                    <View style={[styles.container, styles.endTitle]}>
                        <Text>S-234</Text>
                        <Text>S-234</Text>
                    </View>
            </LinearGradient>
        </View>
  )
}

export default ReconciliationCard

const styles = StyleSheet.create({
    mainContainer:{
        paddingTop: 15,
        paddingRight: 22,
        paddingBottom: 5,
        paddingLeft: 22,
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        padding:8,
    },
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
    middleTitle:{
        marginTop:10
    },
    TopMarginLeft:{ 
        marginLeft:30,
    },
    TopMarginRight:{
        marginRight:30,
    },
    AisleTitle:{
        fontSize:15,
        color:'black',
        fontWeight:'500',
    },
    endTitle:{
        paddingTop:0
    }
})