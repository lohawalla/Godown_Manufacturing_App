import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectedCard from '../../components/atoms/SelectedCard/SelectedCard';
import Card from '../../components/atoms/Card/Card';
import {StackScreenProps} from '@react-navigation/stack';
import PrimaryButton from '../../components/atoms/CustomButton/PrimaryButton';

type RootStackParamList = {
  Popup: {
    godown: {godownId: string; godownName: string; godownCode: string};
    aisle: {aisleId: string; aisleName: string; aisleCode: string};
    shelf: {shelfId: string; shelfName: string; shelfCode: string};
  };
};

type PopupScreenProps = StackScreenProps<RootStackParamList, 'Popup'>;

const Popup: React.FC<PopupScreenProps> = ({route, navigation}) => {
  const {godown, aisle, shelf} = route.params;

  const handlePress = () => {
    console.log('button pressed');
  };
  return (
    <View style={styles.mainContainer}>
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
          width={328}
          onPress={() =>
            navigation.navigate('QRAssign', {
              godown: {
                id: godown.godownId,
                name: godown.godownName,
                code: godown.godownCode,
              },
              aisle: {
                id: aisle.aisleId,
                name: aisle.aisleName,
                code: aisle.aisleCode,
              },
              shelf: {
                id: shelf.shelfId,
                name: shelf.shelfName,
                code: shelf.shelfCode,
              },
            })
          }
        />
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 15,
    marginLeft: -10,
  },
  container: {
    marginVertical: 15,
  },
});
