import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface HeadingAssignProps {
  source: ImageSourcePropType;
  title: string;
}

const HeadingAssign: React.FC<HeadingAssignProps> = ({source, title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={source} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default HeadingAssign;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 60,
    objectFit: 'contain',
    marginRight: 8,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(71, 85, 105, 1)',
  },
});
