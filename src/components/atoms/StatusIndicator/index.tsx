import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type PropType = {
    color: string,
    backgroundColor: string,
    borderWidth?: number,
    text: string,
    smallText?: string,
    width:number
}

const index = ({ color, backgroundColor, borderWidth, text, smallText,width }: PropType) => {
    return (
        <View>
            <View style={[styles.temp, { borderWidth: borderWidth, backgroundColor: backgroundColor,width:width }]}>
                {smallText && <Text style={{ fontSize: 8, color: color, fontWeight: 'bold', }}>{smallText}</Text>}
                <Text style={{ fontSize: 10, color: color, fontWeight: 'bold', }}>{text}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    temp: {
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 0,
        paddingHorizontal: 8,
        height:30,
        justifyContent:'center'
    }
})
export default index