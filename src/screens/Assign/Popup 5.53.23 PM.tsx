import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectedCard from '../../components/atoms/SelectedCard/SelectedCard';
import Card from '../../components/atoms/Card/Card';
import {StackScreenProps} from '@react-navigation/stack';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';
import {G} from 'react-native-svg';

type RootStackParamList = {
  Popup: {
    godown: {godownId: string; godownName: string};
    aisle: {aisleId: string; aisleName: string};
    shelf: {shelfId: string; shelfName: string};
  };
};

type PopupScreenProps = StackScreenProps<RootStackParamList, 'Popup'>;

const Popup: React.FC<PopupScreenProps> = ({route, navigation}) => {
  const {godown, aisle, shelf} = route.params;

  const handlePress = () => {
    console.log('button pressed');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Card
          name="Godown"
          height={160}
          image={require('../../theme/assets/godown.jpg')}
        />
        <SelectedCard value={godown?.godownName} />
      </View>
      <View style={styles.container}>
        <Card
          name="Shelf"
          height={160}
          image={require('../../theme/assets/godown.jpg')}
        />
        <SelectedCard value={shelf?.shelfName} />
      </View>
      <View style={styles.container}>
        <Card
          name="Aisle"
          height={160}
          image={require('../../theme/assets/godown.jpg')}
        />
        <SelectedCard value={aisle?.aisleName} />
      </View>
      <View style={styles.button}>
        <PrimaryButton
          text="Scan QR"
          width={330}
          onPress={() =>
            navigation.navigate('QRAssign', {
              godown: {id: godown.godownId, name: godown.godownName},
              aisle: {id: aisle.aisleId, name: aisle.aisleName},
              shelf: {id: shelf.shelfId, name: shelf.shelfName},
            })
          }
        />
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
  container: {
    marginVertical: 15,
  },
});
