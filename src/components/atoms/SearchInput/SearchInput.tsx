import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchInputProps {
  value: string;
  onChangeText: ((text: string) => void) | undefined;
}

const SearchInput: React.FC<SearchInputProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={24}
        color="rgba(30, 41, 59, 1)"
        style={{marginRight: 8}}
      />
      <TextInput
        placeholder="Search or Select..|"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 1)',
    width: 310,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
});
