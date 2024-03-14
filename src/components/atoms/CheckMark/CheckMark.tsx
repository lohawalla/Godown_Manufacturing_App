import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckMark = () => {
  return (
    <View style={styles.circle}>
      <Icon name="check" size={62} color="white" />
    </View>
  );
};

export default CheckMark;

const styles = StyleSheet.create({
  circle: {
    width: 96,
    height: 96,
    borderRadius: 100,
    backgroundColor: 'rgba(5, 150, 105, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
