import { View } from 'react-native'
import React, { useState } from 'react'
import PartiListCard from '../../atoms/PartyListCard'
import StatusIndicator from '../../atoms/StatusIndicator'
import LinearGradient from 'react-native-linear-gradient'
import MaterialInfo from './MaterialInfo'
import RadioButton from '../../atoms/RadioButton/RadioButton'


const index = () => {
    const [selectedBtn, setSelectedBtn] = useState<number>(1)
    const handleRadio = (val: number) => {
        setSelectedBtn(val)
    }

    return (
        <View>
            <LinearGradient colors={['#0078FB29', '#0078FB0A']} style={{ paddingVertical: 16, paddingHorizontal: 12, borderWidth: 1, margin: 12, borderRadius: 8, borderColor: '#FFFFFF73' }}>
                <View >
                    <StatusIndicator color={'#FB8200'} backgroundColor={'#FFEDE7'} text={'PENDING'} width={60} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <PartiListCard color={'white'}
                        backgroundColor={'#1E293B'}
                        text={'IRON'}
                        borderWidth={1}/>
                </View>
                <View style={{ height: 2, backgroundColor: '#CBD5E1' }}></View>
                <View>
                    <View>
                        {/* Top */}
                        <View >
                            <View style={{ marginVertical: 10 }}>
                                <RadioButton label={'Raw Material 1'} isSelected={selectedBtn === 1} onPress={() => handleRadio(1)} />
                            </View>
                            {selectedBtn === 1 && <MaterialInfo />}
                            <View style={{ height: 1, backgroundColor: '#CBD5E1' }}></View>
                            <View style={{ marginVertical: 20 }}>
                                <RadioButton label={'Raw Material 2'} isSelected={selectedBtn === 2} onPress={() => handleRadio(2)} />
                            </View>
                            {selectedBtn === 2 && <MaterialInfo />}
                            <View style={{ height: 2, backgroundColor: '#CBD5E1' }}></View>
                            <View style={{ marginVertical: 20 }}>
                                <RadioButton label={'Raw Material 3'} isSelected={selectedBtn === 3} onPress={() => handleRadio(3)} />
                            </View>
                            {selectedBtn === 3 && <MaterialInfo />}
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default index