import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface SuggestionBoxProps {
  value: string;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default SuggestionBox;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: 'left',
  },
});
