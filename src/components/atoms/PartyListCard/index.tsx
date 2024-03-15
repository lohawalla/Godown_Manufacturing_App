import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import StatusText from '../StatusIndicator'
type Proptypes = {
    numberName: string,
    uniqueNumber: number
}

type IndicatorType = {
    color?: string,
    backgroundColor?: string,
    text?: string,
    borderWidth?: number,
    smallText?: string,
}

const NumberInfo = ({ numberName, uniqueNumber }: Proptypes) => {
    return <View>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1e293b' }}>{numberName}</Text>
        <Text style={{ fontSize: 23, color: '#64748b' }}>{uniqueNumber}</Text>
    </View>
}

const index = ({ color, backgroundColor, text,borderWidth, smallText}: IndicatorType) => {
    return (
        <LinearGradient colors={['#0078FB29', '#0078FB0A']} style={{ flexDirection: 'column', borderWidth: 2, borderColor: 'white', borderRadius: 15, padding: 18 }}>
            {/* top view */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                {/* Left View */}
                <View style={{ flexDirection: 'row' }}>
                    {/* Image View */}
                    <View>
                        <Image style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 1, borderColor: 'white', marginRight: 10 }} source={{ uri: 'https://shorturl.at/dlpDG' }} />
                    </View>

                    {/* Name View */}
                    <View>
                        <Text style={{ color: '#64748b' }}>07/10/23, 02:00pm</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#1e293b' }}>Danish Ali</Text>
                    </View>
                    <StatusText color={color || '#fb8200'} backgroundColor={backgroundColor || '#ffede7'} text={text || 'PENDING'} width={typeof smallText !== undefined ? 50 : 60} borderWidth={borderWidth && borderWidth} smallText={smallText && smallText}/>
                </View>
                {/* Right View */}
                <View>
                    <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://rb.gy/m8zvbd' }} />
                </View>
            </View>
            {/* bottom view */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <NumberInfo numberName={'Sales Number'} uniqueNumber={1212123} />
                <NumberInfo numberName={'Bill Number'} uniqueNumber={1212123} />
                <NumberInfo numberName={'Purchase Number'} uniqueNumber={1212123} />
            </View>
        </LinearGradient>
    )
}

export default index