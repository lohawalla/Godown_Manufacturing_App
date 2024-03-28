import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
const GodownNameCards = () => {
    const [activeInput,setActiveInput] = useState(true)

    const save=()=>{
        setActiveInput(false)
    }

    const edit=()=>{
        setActiveInput(true)
    }

    return (
        <LinearGradient colors={['#0078FB29','#0078FB0A']} style={{borderRadius:14,borderWidth:1,borderColor:'white',paddingVertical:10,paddingHorizontal:12,margin:10}}>
            <View style={{marginBottom:10,flexDirection:'column'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontWeight:'700',fontSize:18,lineHeight:18.67,color:'#1E293B'}}>Godown Name</Text>
                    </View>
                    <Text style={{color:'#475569'}}>G.CODE</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                    <View>
                        <Text style={{fontWeight:'700',fontSize:18,lineHeight:18.67,color:'#1E293B'}}>Aisle Name</Text>
                    </View>
                    <Text style={{color:'#475569'}}>A.CODE</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#1E293B'}}> Input Quantity</Text>
                    <TextInput keyboardType = 'numeric' editable={activeInput} placeholder='Type...' style={{marginTop:5, textAlign:'center', borderWidth:1, borderRadius:5, height:40, width:80}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={!activeInput} onPress={save}>
                    <View style={styles.saveBtn}>
                        <Text style={{color:'white', margin:0}}>
                            Save
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={edit}>
                    <View style={styles.editBtn}>
                        <Text style={{color:'black', margin:0}}>
                            Edit
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    saveBtn:{
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        padding:8,
        height:35,
        width:70,
        borderRadius:30,
        color:'white',
        backgroundColor:'black',
        marginTop:30,
        marginRight:10
    },
    editBtn:{
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        padding:8,
        height:35,
        width:70,
        borderRadius:30,
        color:'white',
        marginTop:30,
    }
})

export default GodownNameCards