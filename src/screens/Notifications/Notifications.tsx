import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import NotificationHeaderTitle from './NotificationHeaderTitle'
import ToggleButton from '../../components/molecules/ToggleHeader/ToggleButton'
import NotificationCard from '../../components/molecules/Notification/NotificationCard'
import { FlatList } from 'react-native-gesture-handler'

const data=[
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
  {_id:'1',},
]
const Notifications = () => {
  const [toggle, setToggle]=useState(true)
  const switchNotification=(val:boolean)=>{
    setToggle(val)
  }
  return (
    <SafeAreaView>
      <Navbar/>
      <NotificationHeaderTitle notification={3}/>
      <ToggleButton titleOne={'Need to read'} titleTwo={'Have read'} toggleView={switchNotification} toggleBtn={toggle}/>
      {toggle && <FlatList
            data={data}
            renderItem={({item}:any):JSX.Element => <NotificationCard colour={'red'}/>}
            keyExtractor={item => item._id}
            />}
      {!toggle && <FlatList
            data={data}
            renderItem={({item}:any):JSX.Element => <NotificationCard colour={'green'}/>}
            keyExtractor={item => item._id}
            />}
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({})