import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface RadioButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  isSelected,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.radioWrapper}>
          <Text style={styles.radioText}>{label}</Text>
          <View style={styles.radio}>
            {isSelected ? (
              <View style={styles.radioInner}>
                <View style={styles.innerWhite}></View>
              </View>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radio: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(9, 30, 66, 0.13)',
    backgroundColor: 'rgba(9, 30, 66, 0.13)',
    marginHorizontal: 8,
  },
  radioText: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'left',
    color: 'rgba(23, 43, 77, 1)',
  },
  radioWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioInner: {
    width: 22,
    height: 22,
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWhite: {
    width: 7,
    height: 7,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
