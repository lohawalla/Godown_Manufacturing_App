import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SecondaryButtonProps {
  text: string;
  icon: {name: string; size: number; color: string} | any;
  backgroundColor: string | undefined;
  color: string | undefined;
  width:number;
  onPress: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  backgroundColor,
  color,
  icon,
  width,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.textContainer, {backgroundColor}, {width}]}>
        <Icon {...icon} />
        <Text style={[styles.text, {color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: 139,
    borderWidth: 1,
    borderColor: 'rgba(30, 41, 59, 1)',
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    marginLeft: 12,
  },
});
