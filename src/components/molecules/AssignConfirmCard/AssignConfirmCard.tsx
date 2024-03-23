import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Navbar} from '../../../screens';

interface AssignConfirmProps {
  shelfCode: string;
  aisleCode: string;
  image: any;
  aisleImage: any;
}

const AssignConfirmCard: React.FC<AssignConfirmProps> = ({
  shelfCode,
  aisleCode,
  image,
  aisleImage,
}) => {
  return (
    <View style={styles.mainComponent}>
      <LinearGradient
        colors={['#E5F1FE', 'white']}
        start={{x: 0.1, y: 0}}
        end={{x: 0.01, y: 0.7}}
        locations={[0.2, 1.3]}
        style={{
          width: '90%',
          backgroundColor: '#ccdaf7',
          height: '50%',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#a6acb8',
        }}>
        {/* <View style={styles.component}> */}
        <View style={styles.MainTitle}>
          <Text style={styles.Heading}>Assign this QR Code to</Text>
        </View>
        <View style={styles.secondComponent}>
          <Image style={styles.qr_image} source={image} />
          <Text style={styles.primaryTitle}>QR Code No. </Text>
          <Text style={styles.secondaryTitle}>78996</Text>
        </View>
        <View style={styles.thirdComponent}>
          <Image style={styles.secondaryImage} source={aisleImage} />
          <View>
            <View style={styles.row}>
              <Text style={styles.primaryTitle}>Shelf Code: </Text>
              <Text style={styles.secondaryTitle}>{shelfCode}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.primaryTitle}>Aisle Code: </Text>
              <Text style={styles.secondaryTitle}>{aisleCode}</Text>
            </View>
          </View>
        </View>
        {/* </View> */}
      </LinearGradient>
    </View>
  );
};

export default AssignConfirmCard;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  component: {
    width: '90%',
    backgroundColor: '#dce6f9',
    height: '50%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a6acb8',
  },
  MainTitle: {
    alignItems: 'center',
    marginTop: 10,
  },
  Heading: {
    color: '#475569',
    fontSize: 26,
    fontWeight: 'bold',
  },
  secondComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  qr_image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  primaryTitle: {
    color: '#475569',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryImage: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginRight: 40,
  },
  secondaryTitle: {
    fontSize: 16,
  },
  thirdComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  row: {
    flexDirection: 'row',
  },
});