import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import HeadingAssign from '../../components/atoms/Heading/HeadingAssign';
import SearchInput from '../../components/atoms/SearchInput/SearchInput';
import Seperator from '../../components/atoms/Seperator/Seperator';
import {useFetchAllShelves} from '../../services/shelf/hooks';
import {useFetchAllAisles} from '../../services/aisle/hooks';

interface Aisle {
  id: string;
  name: string;
  code: string;
}

const AisleList = ({navigation, route}: {navigation: any; route: any}) => {
  const [inputValue, setInputValue] = useState('');
  const [aisle, setAisles] = useState<Aisle[]>([]);
  const [matchedData, setMatchedData] = useState<Aisle[]>([]);
  const {godown, shelf} = route.params;

  const {data, error, isError, isLoading} = useFetchAllAisles({
    shelfId: shelf.shelfId,
  });

  useEffect(() => {
    if (data) {
      const aisles = data.result?.map((result: any) => ({
        id: result._id,
        name: result.aisleName,
        code: result.aisleCode,
      }));
      setMatchedData(aisles);
    }
  }, [data]);

  const handleAislePress = (aisle: any) => {
    navigation.navigate('Popup', {
      aisle: {
        aisleId: aisle.id,
        aisleName: aisle.name,
        aisleCode: aisle.code,
      },
      shelf: route.params?.shelf,
      godown: route.params?.godown,
    });
  };

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  if (!data) {
    return (
      <View>
        <Text>No data available</Text>
      </View>
    );
  }

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (matchedData) {
      const matched = matchedData.filter((aisle: Aisle) =>
        aisle.name.toLowerCase().includes(text.toLowerCase()),
      );
      setMatchedData(matched);
    }
  };

  const renderItem = ({item}: {item: Aisle}) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity onPress={() => handleAislePress(item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.contentContainer}>
        <View>
          <HeadingAssign
            title="Aisle List"
            source={require('../../theme/assets/aisle.png')}
          />
        </View>
        <View style={styles.input}>
          <SearchInput
            width={300}
            value={inputValue}
            onChangeText={handleInputChange}
          />
        </View>
        <View style={styles.seperator}>
          <Seperator
            width={300}
            height={1}
            backgroundColor="rgba(148, 163, 184, 1)"
          />
        </View>

        <FlatList
          data={matchedData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginTop: 12}}
        />
      </View>
    </View>
  );
};

export default AisleList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(135,206,250,0.2)',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  seperator: {
    marginTop: 20,
  },
  input: {
    marginTop: 26,
  },
  list: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
  },
});
