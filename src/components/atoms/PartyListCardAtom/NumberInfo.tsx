import { View, Text, Image } from 'react-native'
import React from 'react'
type Proptypes = {
    numberName: string | string,
    uniqueNumber: number | string
}

const NumberInfo = ({ numberName, uniqueNumber }: Proptypes) => {
    return <View>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1e293b' }}>{numberName}</Text>
        <Text style={{ fontSize: 23, color: '#64748b' }}>{uniqueNumber}</Text>
    </View>
}

export default NumberInfo