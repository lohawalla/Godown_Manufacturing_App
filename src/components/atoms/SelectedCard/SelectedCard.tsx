import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const SelectedCard = ({value}: {value: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default SelectedCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#47556933',
    // marginTop: -50,
    marginVertical: 20,
    // width: 310,
    alignSelf: 'center',
    position: 'absolute',

    left: 10,
    right: 10,
    bottom: 0,
  },
  text: {color: '#1E293B'},
});
