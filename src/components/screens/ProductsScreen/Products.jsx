import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import BrowseProductsModal from '../../organisms/BrowseProductsModal/BrowseProductsModal';
import useProduct from '../../../hooks/useProduct';
import Header from '../../atoms/Header/Header';

import DATA from '../../../dataSource/getAllProductsWithCategories.json';
import ProductItem from '../../atoms/ProductItem/ProductItem';

const Products = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const {products, filteredProducts, getAllProducts, onFilteredProducts} =
    useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  const closeModal = () => setModalVisible(!modalVisible);

  const onApplyFilter = () => {
    onFilteredProducts(selectedIds, filteredProducts);
    closeModal();
  };

  const onClearFilter = async () => {
    setSelectedIds([]);
    onFilteredProducts([], filteredProducts);
    closeModal();
  };

  const renderActionButtons = () => (
    <View style={styles.actionButtonsContainer}>
      <Button
        title="Apply"
        disabled={selectedIds.length === 0}
        onPress={onApplyFilter}
      />
      <Button title="Clear" color="grey" onPress={onClearFilter} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Products'}
        onRightAction={() => setModalVisible(!modalVisible)}
      />

      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Available Products</Text>
          <View style={styles.countBadge}>
            <Text style={styles.badgeText}>{products.length}</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={products}
            keyExtractor={item => item.variantId.toString()}
            renderItem={({item}) => <ProductItem item={item} />}
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
      <BrowseProductsModal
        data={DATA}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        renderActionButtons={renderActionButtons}
        extraComponent={() => null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    height: 28,
    width: 28,
    borderRadius: 14,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingBottom: 150,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Products;
