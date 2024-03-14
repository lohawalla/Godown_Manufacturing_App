import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface PopupButtonProps {
  backgroundColor: string;
  borderColor: string;
  text: string;
  onPress: () => void;
}

const PopupButton: React.FC<PopupButtonProps> = ({
  backgroundColor,
  borderColor,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cancelBtn, {borderColor, backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PopupButton;

const styles = StyleSheet.create({
  cancelBtn: {
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
  },
  btnText: {
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(30, 41, 59, 1)',
  },
});
