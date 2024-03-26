import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import StatusText from '../../atoms/StatusIndicator'
import NumberInfo from '../../atoms/PartyListCardAtom/NumberInfo'

type IndicatorType = {
    color?: string,
    backgroundColor?: string,
    text?: string,
    borderWidth?: number,
    smallText?: string,
    primaryImage:string,
    qrImage:string,
    DateTime:string,
    Name:string,
    status:string,
    billNumber:string | number,
    salesNumber:string | number,
    purchaseNumber:string | number,
    onPress:any
}

const PartyListCard = ({onPress, status,color, backgroundColor, text,borderWidth, smallText, primaryImage, qrImage, DateTime , Name, billNumber, salesNumber, purchaseNumber}: IndicatorType):JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={['#0078FB29', '#0078FB0A']} style={{ flexDirection: 'column', borderWidth: 1, borderColor: 'white', borderRadius: 15, padding: 18, marginBottom:10 }}>
            {/* top view */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                {/* Left View */}
                <View style={{ flexDirection: 'row'}}>
                    {/* Image View */}
                    <View>
                        <Image style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 1, borderColor: 'white', marginRight: 10 }} source={{ uri: primaryImage }} />
                    </View>
    
                    {/* Name View */}
                    <View>
                        <Text style={{ color: '#64748b' }}>{DateTime}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#1e293b', width:120 }}>{Name}</Text>
                    </View>
                    <View style={{marginTop:4}}>
                        <StatusText color={color || '#fb8200'} backgroundColor={backgroundColor || '#ffede7'} text={text || status} width={typeof smallText !== undefined ? 80 : 80} borderWidth={borderWidth && borderWidth} smallText={smallText && smallText}/>
                    </View>
                </View>
                {/* Right View */}
                <View>
                    <Image style={{ width: 40, height: 40 }} source={{ uri: qrImage }} />
                </View>
            </View>
            {/* bottom view */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <NumberInfo numberName={'Sales Number'} uniqueNumber={salesNumber} />
                <NumberInfo numberName={'Bill Number'} uniqueNumber={billNumber} />
                <NumberInfo numberName={'purchase Number'} uniqueNumber={purchaseNumber} />
            </View>
        </LinearGradient>
        </TouchableOpacity>
    )
}

export default PartyListCard

const styles = StyleSheet.create({})