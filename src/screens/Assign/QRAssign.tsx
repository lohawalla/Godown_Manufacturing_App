import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const QRAssign = () => {
  const device = useCameraDevice('back');

  if (device == null) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <Camera device={device} isActive={true} style={StyleSheet.absoluteFill} />
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};

export default QRAssign;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
