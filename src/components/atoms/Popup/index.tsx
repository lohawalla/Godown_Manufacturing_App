import { Text, Image, StyleSheet, Modal } from 'react-native'
import React from 'react'
import ImageIndex from '../../../theme/AssestIndex'
import LinearGradient from 'react-native-linear-gradient'
import { BlurView } from "@react-native-community/blur";
const index = () => {
    return (
        <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
        >
            <Modal visible={true} animationType="slide" transparent={true}>
                <LinearGradient colors={['#0EC75C99', '#0EC75C2E']} style={[styles.container, styles.blurOverlay]}>
                    <Image style={{ width: 32, height: 32 }} source={ImageIndex.popupSuccess} />
                    <Text style={{ color: '#2A333E', fontWeight: '700', fontSize: 18, lineHeight: 21.6 }}>Loading Start Successfully</Text>
                </LinearGradient>
            </Modal>
        </BlurView >
    )
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        marginTop: 10,
        marginHorizontal: 16,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderRadius: 16,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white'
    },
    blurOverlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 100,
    },
});

export default index