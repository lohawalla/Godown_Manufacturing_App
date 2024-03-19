import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const SelectedCard = ({ value }: { value: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}asdfasdf</Text>
        </View>
    )
}

export default SelectedCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#47556933',
        marginTop: 50,
        width: 310,
        alignSelf: 'center'
    },
    text: { color: '#1E293B' }
})