import {Text, View, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ItemCardProps {
  image: ImageSourcePropType;
  itemName: string;
  quantity: string;
  lastUpdatedDate: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  itemName,
  quantity,
  lastUpdatedDate,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View>
              <Text style={styles.nameText}>{itemName}</Text>
              <Text style={styles.qtyText}>Quantity Present</Text>
            </View>
            <View style={styles.valueWrapper}>
              <Text style={styles.valueText}>{quantity}</Text>
            </View>
          </View>
          <View>
            <Icon name="edit" size={18} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.lastContainer}>
        <Text style={styles.qtyText}>Last Updated</Text>
        <Text style={styles.valueText}>{lastUpdatedDate}</Text>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  container: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  nameText: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.14,
    color: 'rgba(30, 41, 59, 1)',
    marginBottom: 8,
  },
  qtyText: {
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16.8,
    letterSpacing: 0.12,
    color: 'rgba(100, 116, 139, 1)',
    marginBottom: 8,
  },
  valueWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(203, 213, 225, 1)',
    borderRadius: 2,
    paddingVertical: 3,
    width: 60,
  },
  valueText: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.6,
    color: 'rgba(30, 41, 59, 1)',
    textAlign: 'center',
  },
  lastContainer: {
    alignItems: 'flex-end',
  },
});
