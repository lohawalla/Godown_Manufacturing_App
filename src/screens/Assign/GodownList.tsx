import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import HeadingAssign from '../../components/atoms/Heading/HeadingAssign';
import SearchInput from '../../components/atoms/SearchInput/SearchInput';
import Seperator from '../../components/atoms/Seperator/Seperator';
import {useFetchAllGodowns} from '../../services/godown/hooks';

interface Godown {
  id: string;
  name: string;
  code: string;
}

const GodownList = ({navigation}: {navigation: any}) => {
  const [inputValue, setInputValue] = useState('');
  const [godowns, setGodowns] = useState<Godown[]>([]);
  const [matchedData, setMatchedData] = useState<Godown[]>([]);

  const {data, isError, error, isLoading} = useFetchAllGodowns();

  useEffect(() => {
    if (data) {
      const mappedGodowns: Godown[] = data.godowns?.map((godown: any) => ({
        id: godown._id,
        name: godown.godownName,
        code: godown.godownCode,
      }));
      setMatchedData(mappedGodowns);
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

  const handleGodownPress = (godown: Godown) => {
    navigation.navigate('ShelfList', {
      godown: {
        godownId: godown.id,
        godownName: godown.name,
        godownCode: godown.code,
      },
    });
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (matchedData) {
      const matched = matchedData.filter((godown: Godown) =>
        godown.name.toLowerCase().includes(text.toLowerCase()),
      );
      setMatchedData(matched);
    }
  };

  const renderItem = ({item}: {item: Godown}) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity onPress={() => handleGodownPress(item)}>
          <Text style={styles.text}>{item.name}</Text>
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
            title="Godowns List"
            source={require('../../theme/assets/godown.jpg')}
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

export default GodownList;

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
  text: {
    color: 'black',
  },
});
