import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButton from '../../atoms/RadioButton/RadioButton';

const InputWithSuggestion = ({setNextScan}:any) => {
  const numbers = [
    '15426223330',
    '15426215283',
    '15426210000',
    '15426211111',
    '15426212222',
    '15426823330',
    '15926215283',
    '15426211000',
    '15426210111',
    '15426652222',
  ];
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [matchedNumbers, setMatchedNumbers] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleUpBtn = () => {
    setShowSuggestions(!showSuggestions);
    setNextScan(!showSuggestions)
  };

  const handleDown = () => {
    setShowSuggestions(!showSuggestions);
    setNextScan(!showSuggestions)
  };

  const handleRadioButtonPress = (label: string) => {
    setInputValue(label);
    setSelectedRadio(label);
    setShowSuggestions(false);
    setNextScan(false)
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    const matched = numbers.filter(number => number.includes(text));
    setMatchedNumbers(matched);
    setShowSuggestions(text.length > 0);    
    setNextScan(text.length > 0) 
  };

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.itemContainer}>
      <RadioButton
        key={item}
        label={item}
        isSelected={selectedRadio === item}
        onPress={() => handleRadioButtonPress(item)}
      />
    </View>
  );

  return (
    <>
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.container,
          inputValue ? {backgroundColor: 'rgba(30, 41, 59, 1)'} : null,
        ]}>
        <TextInput
          placeholder="Choose sales Number...|"
          value={inputValue}
          onChangeText={handleInputChange}
          style={inputValue ? {color: 'white'} : null}
        />

        <TouchableOpacity onPress={handleUpBtn}>
          <Icon
            name="angle-down"
            size={24}
            color="black"
            onPress={handleDown}
          />
          {inputValue !== '' && (
            <Icon
              name="angle-up"
              size={24}
              color="white"
              style={{marginTop: -30}}
            />
          )}
        </TouchableOpacity>
      </View>
      {matchedNumbers.length > 0 && showSuggestions && (
        <View style={styles.numberContainer}>
          <FlatList
            data={matchedNumbers}
            renderItem={renderItem}
            keyExtractor={item => item}
            style={{height: 200}}
          />
        </View>
      )}
    </View>
    </>
  );
};

export default InputWithSuggestion;

const styles = StyleSheet.create({
  mainContainer:{
    alignItems:'center'
  },
  container: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'rgba(148, 163, 184, 1)',
    borderRadius: 100,
    width:'94%'
  },
  coloredBackground: {
    backgroundColor: 'rgba(30, 41, 59, 1)',
  },

  text: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(30, 41, 59, 1)',
  },
  numberContainer: {
    borderWidth: 1,
    borderColor: 'rgba(203, 213, 225, 1)',
    borderRadius: 14,
    backgroundColor: 'white',
    padding: 12,
    marginTop: 16,
    elevation: 16,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 16,
    width:'94%'
  },
  itemContainer: {
    marginVertical: 8,
  },
});
