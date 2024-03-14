import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Icon
          name="long-arrow-right"
          size={16}
          color="rgba(255, 255, 255, 1)"
        />
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 41, 59, 1)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    marginRight: 4,
  },
});
