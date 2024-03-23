import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import HeadingAssign from '../../components/atoms/Heading/HeadingAssign';
import SearchInput from '../../components/atoms/SearchInput/SearchInput';
import Seperator from '../../components/atoms/Seperator/Seperator';
import {useFetchAllShelves} from '../../services/shelf/hooks';

interface Shelf {
  id: string;
  name: string;
  code: string;
}

const ShelfList = ({navigation, route}: {navigation: any; route: any}) => {
  const [inputValue, setInputValue] = useState('');
  const [shelf, setShelves] = useState<Shelf[]>([]);
  const [matchedData, setMatchedData] = useState<Shelf[]>([]);
  const {godown} = route.params;

  const {data, error, isError, isLoading} = useFetchAllShelves({
    godownId: godown.godownId,
  });

  useEffect(() => {
    if (data) {
      const shelves = data.result?.map((result: any) => ({
        id: result._id,
        name: result.shelfName,
        code: result.shelfCode,
      }));
      setMatchedData(shelves);
    }
  }, [data]);

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

  const handleshelfPress = (shelf: any) => {
    navigation.navigate('AisleList', {
      godown,
      shelf: {
        shelfId: shelf.id,
        shelfName: shelf.name,
        shelfCode: shelf.code,
      },
    });
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (matchedData) {
      const matched = matchedData.filter((shelf: Shelf) =>
        shelf.name.toLowerCase().includes(text.toLowerCase()),
      );
      setMatchedData(matched);
    }
  };

  const renderItem = ({item}: {item: Shelf}) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity onPress={() => handleshelfPress(item)}>
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
            title="Shelf List"
            source={require('../../theme/assets/Shelf.png')}
          />
        </View>
        <View style={styles.input}>
          <SearchInput
            width={330}
            value={inputValue}
            onChangeText={handleInputChange}
          />
        </View>
        <View style={styles.seperator}>
          <Seperator
            width={340}
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

export default ShelfList;

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
