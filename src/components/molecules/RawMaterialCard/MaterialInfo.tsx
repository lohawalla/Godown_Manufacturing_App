import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import StatusIndicator from '../../atoms/StatusIndicator'

const MaterialInfo = ({data}:any) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Godown 1', value: 'Godown 1' },
        { label: 'Godown 2', value: 'Godown 2' },
        { label: 'Godown 3', value: 'Godown 3' },
    ]);

    return (
        <View style={{marginVertical:20}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: '#1E293B', fontWeight: '500', fontSize: 12 }}>M.CODE</Text>
                    <Text style={{ color: '#64748B', fontWeight: '700', fontSize: 14 }}>{data?.Items[0]?.MCode}</Text>
                </View>
                <View>
                    <StatusIndicator color={'white'} backgroundColor={'#1E293B'} text={'12:02:2023'} smallText={'DUE DATE'}  width={100}/>
                </View>
                <View style={{ alignContent: 'flex-end' }}>
                    <Text style={{ color: '#1E293B', fontSize: 12, fontWeight: '500' }}>Total Amount</Text>
                    <Text style={{ color: '#64748B', fontSize: 14, fontWeight: '700' }}>{data?.totalAmount}</Text>
                </View>
            </View>
            {/* Bottom */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginTop: 10,borderWidth:1,borderRadius:4,borderColor:'#94A3B8' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#1E293B', fontSize: 12, fontWeight: '500' }}>Godown</Text>
                    <DropDownPicker
                        style={{ width: 88, height: 30, backgroundColor: 'transparent', borderWidth: 0 }}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        disableBorderRadius={true}
                        zIndex={1000}
                        placeholder={'Choose'}
                        textStyle={{ fontSize: 10 }}
                    />
                </View>
                <View style={{ width: 72, height: 68, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#1E293B', fontSize: 12, fontWeight: '500' }}>Purchase Quantity</Text>
                    <Text>{data?.Items[0]?.salesOrders[0]?.quantity}</Text>
                </View>
                <View style={{ width: 72, height: 68, justifyContent: 'center' }}>
                    <Text style={{ color: '#1E293B', fontSize: 12, fontWeight: '500',marginTop:10}}>Input Quantity</Text>
                    <TextInput placeholder='Type...' style={{marginTop:0}}/>
                </View>
            </View>
        </View>
    )
}

export default MaterialInfo