import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ProductItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
      <Image source={{uri: item.imageUrl}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemModel}>{item.modelName}</Text>
        <Text style={styles.itemVariant}>{item.variantName}</Text>
        <Text style={styles.itemPrice}>{`${item.price} SAR`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  itemDetails: {
    marginLeft: 15,
  },
  itemModel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemVariant: {
    fontSize: 14,
    color: '#888',
  },
  itemPrice: {
    marginTop: 4,
    fontSize: 12,
    color: 'rgb(23, 122, 226)',
    fontWeight: 'bold',
  },
});

export default ProductItem;
