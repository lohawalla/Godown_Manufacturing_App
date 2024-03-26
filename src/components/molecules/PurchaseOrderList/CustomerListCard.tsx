import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import StatusText from '../../atoms/StatusIndicator'
import NumberInfo from '../../atoms/PartyListCardAtom/NumberInfo'

type IndicatorType = {
    primaryImage:string,
    Name:string,
    onPress:any,
    partyCode:String
}

const PartyListCard = ({onPress, primaryImage, Name, partyCode}: IndicatorType):JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={['#0078FB29', '#0078FB0A']} style={{ flexDirection: 'column', borderWidth: 1, borderColor: 'white', borderRadius: 15, padding: 18, marginBottom:10 }}>
            {/* top view */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0 }}>
                {/* Left View */}
                <View style={{ flexDirection: 'row'}}>
                    {/* Image View */}
                    <View>
                        <Image style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 1, borderColor: 'white', marginRight: 10 }} source={{ uri: primaryImage }} />
                    </View>
    
                    {/* Name View */}
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#1e293b', width:120 }}>{Name}</Text>
                    </View>
                </View>
                {/* Right View */}
                <View>
                   <Text style={styles.customerCode}>{partyCode}</Text>
                </View>
            </View>
        </LinearGradient>
        </TouchableOpacity>
    )
}

export default PartyListCard

const styles = StyleSheet.create({
    customerCode:{
        fontSize:18,
        fontWeight:'bold',
        color:'#1e293b'
    }
})