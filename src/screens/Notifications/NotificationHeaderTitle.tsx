import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationHeaderTitle = ({notification}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Notifications</Text>
      <Text style={styles.lowerTitle}>You have <Text style={styles.notification}>{notification} Notifications</Text> today</Text>
    </View>
  )
}

export default NotificationHeaderTitle

const styles = StyleSheet.create({
    container:{
        marginBottom:5
    },
    Header:{
        fontSize:24,
        fontWeight:'500',
        marginLeft:20,
        color:'#475569'
    },
    lowerTitle:{
        marginLeft:20,
        color:'#94a3b8'
    },
    notification:{
        color:'#0078fb'
    }
})