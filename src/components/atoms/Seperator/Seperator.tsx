import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface SeperatorProps {
  width: number;
  height: number;
  backgroundColor: string;
}

const Seperator: React.FC<SeperatorProps> = ({
  width,
  height,
  backgroundColor,
}) => {
  return <View style={{width, height, backgroundColor}}></View>;
};

export default Seperator;

const styles = StyleSheet.create({});
