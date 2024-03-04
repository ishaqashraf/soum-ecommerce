import React from 'react';
import {
  SafeAreaView,
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProductsTreeView from '../../molecules/ProductsTreeView/ProductsTreeView';

const BrowseProductsModal = ({
  data,
  modalVisible,
  setModalVisible,
  selectedIds,
  setSelectedIds,
  renderActionButtons,
  extraComponent,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={styles.modal}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Browse Products</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <ProductsTreeView
            data={data}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </View>
        {renderActionButtons()}
        {extraComponent()}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex:1,
    padding: 16,
  },
});

export default BrowseProductsModal;
