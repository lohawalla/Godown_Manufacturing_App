import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../../components/atoms/Card/Card';
import {ButtonIcon} from '../../components/atoms';
import ImageIndex from '../../theme/AssestIndex';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SelectedCard from '../../components/atoms/SelectedCard/SelectedCard';
import {CodeScannerPage} from '../../components/molecules/Scanner/CodeScannerPage';
import DataComponent from './DataComponent';

const Assign = ({navigation}: any) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '98%'], []);
  const [show, setShow] = useState(false);
  const [scannedValue, setScannedValue] = useState(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('HANDLE SHEET CHANGES', index);
  }, []);
  console.log('Hie212', scannedValue);
  const [shelf, setShelf] = useState<any[]>([
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
    {
      id: 3,
      name: 'Alice',
    },
    {
      id: 4,
      name: 'Bob',
    },
  ]);
  const [aisle, setAisle] = useState<any[]>([
    {
      id: 1,
      name: 'Akash',
    },
    {
      id: 2,
      name: 'Johnny',
    },
    {
      id: 3,
      name: 'Arun',
    },
    {
      id: 4,
      name: 'Bobby',
    },
  ]);
  const [data, setData] = useState<any>({
    data: null,
    name: null,
  });
  const [value, setValue] = useState({
    aisle: 'Select',
    shelf: 'Select',
  });
  const [image, setImage] = useState({
    image: '',
    name: '',
  });
  const handlePresentModalPress = useCallback((val: any, name: any) => {
    bottomSheetModalRef.current?.present();
    setImage(prev => ({...prev, image: val, name}));
    if (name == 'Shelf List') {
      setData({
        data: shelf,
        name: 'shelf',
      });
    } else {
      setData({
        data: aisle,
        name: 'aisle',
      });
    }
  }, []);
  const handlePress = () => {
    console.log('Pressed shelf');
    setValue(prev => ({...prev, shelf: 'Select'}));
    setScannedValue(null);
  };
  const handlePress1 = () => {
    console.log('Pressed aisle');
    setValue(prev => ({...prev, aisle: 'Select'}));
    setScannedValue(null);
  };
  const handleSubmit = (e: any) => {
    if (e === 'Selected') {
      setShow(true);
    } else {
      Alert.alert('Select shelf or aisle');
    }
    console.log('object is my object', e);
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Navbar navigation={navigation} />
      {show ? (
        <CodeScannerPage
          setShow={setShow}
          setScannedValue={setScannedValue}
          navigation={navigation}
        />
      ) : (
        <View style={{zIndex: 5}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{marginVertical: 20}}>
              <TouchableOpacity
                onPress={() =>
                  handlePresentModalPress(ImageIndex.shelf, 'Shelf List')
                }>
                <Card name={'Shelf'} image={ImageIndex.shelf} height={170} />
              </TouchableOpacity>
              {value.shelf !== 'Select' && (
                <SelectedCard value={value.shelf} handlePress={handlePress} />
              )}
            </View>
            <View style={{marginVertical: 80}}>
              <TouchableOpacity
                disabled={value.shelf == 'Select'}
                onPress={() =>
                  handlePresentModalPress(ImageIndex.aisle, 'Aisle List')
                }>
                <Card name={'Aisle'} image={ImageIndex.aisle} height={170} />
              </TouchableOpacity>
              {value.aisle !== 'Select' && (
                <SelectedCard value={value.aisle} handlePress={handlePress1} />
              )}
            </View>
          </View>
          <View>
            <ButtonIcon
              loading={false}
              name={
                value.shelf === 'Select'
                  ? 'Select Shelf. . .'
                  : value.aisle === 'Select'
                  ? 'Select Aisle. . .'
                  : !scannedValue
                  ? 'Scan QR'
                  : 'Proceed To Click Picture. . .'
              }
              width={328}
              handleSubmit={
                value.shelf === 'Select' || value.aisle === 'Select'
                  ? () => handleSubmit('Not Selected')
                  : () => handleSubmit('Selected')
              }
            />
          </View>
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}>
              <View style={{zIndex: 180, backgroundColor: 'white'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 5,
                    alignItems: 'center',
                  }}>
                  {/* @ts-ignore */}
                  <Image
                    style={{width: 30, height: 32, margin: 5}}
                    resizeMode="contain"
                    source={image.image}
                  />
                  <Text style={{fontSize: 24}}>{image.name}</Text>
                </View>
                <BottomSheetTextInput
                  placeholder="Search or Select...."
                  style={styles.textInput}
                />
                <DataComponent
                  bottomSheetModalRef={bottomSheetModalRef}
                  setValue={setValue}
                  image={image}
                  data={data}
                />
              </View>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Assign;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    zIndex: 30,
    flex: 1,
  },
  textInput: {
    alignSelf: 'stretch',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
  },
  contentContainer: {
    // flex: 1,
    // alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  container1: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
