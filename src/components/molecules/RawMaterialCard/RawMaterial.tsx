import { View } from 'react-native'
import React, { useState } from 'react'
import StatusIndicator from '../../atoms/StatusIndicator'
import LinearGradient from 'react-native-linear-gradient'
import MaterialInfo from './MaterialInfo'
import RadioButton from '../../atoms/RadioButton/RadioButton'
import PartyListCard from '../PartyListCard/PartyListCard'


const RawMaterial = ({data}:any) => {
    const [selectedBtn, setSelectedBtn] = useState<number>(1)
    const handleRadio = (val: number) => {
        setSelectedBtn(val)
    }

    return (
        <View style={{height:'84%'}}>
            <LinearGradient colors={['#0078FB29', '#0078FB0A']} style={{ paddingVertical: 16, paddingHorizontal: 12, borderWidth: 1, margin: 12, borderRadius: 8, borderColor: '#FFFFFF73' }}>
                <View >
                    <StatusIndicator color={'#FB8200'} backgroundColor={'#FFEDE7'} text={'PENDING'} width={60} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <PartyListCard color={'white'}
                        onPress={()=>null}
                        backgroundColor={'#1E293B'}
                        text={'IRON'}
                        borderWidth={1}
                        primaryImage='https://shorturl.at/dlpDG' qrImage='https://rb.gy/m8zvbd' DateTime={data?.createdAt.substring(0, 10)} Name={data?.partyId.partyName.substring(0, 13)+'...'} status='pending' billNumber={data?.billNumber} salesNumber={data?.salesNumber} purchaseNumber={data?.purchaseNumber} />
                </View>
                <View style={{ height: 2, backgroundColor: '#CBD5E1' }}></View>
                <View>
                    <View>
                        {/* Top */}
                        <View >
                            <View>  
                                {/* need to loop */}
                                <View style={{ marginVertical: 10 }}>
                                    <RadioButton label={'Raw Material 1'} isSelected={selectedBtn === 1} onPress={() => handleRadio(1)} />
                                </View>
                                {selectedBtn === 1 && <MaterialInfo data={data}/>}
                                <View style={{ height: 1, backgroundColor: '#CBD5E1' }}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default RawMaterial