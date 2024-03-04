import React from 'react';
import {FlatList, View} from 'react-native';
import ProductTreeItem from '../../atoms/ProductTreeItem/ProductTreeItem';

const ProductsTreeView = ({data, selectedIds, setSelectedIds}) => {
  const handleToggle = id => {
    const isSelected = selectedIds.includes(id);
    setSelectedIds(
      isSelected ? selectedIds.filter(i => i !== id) : [...selectedIds, id],
    );
  };

  return (
    <View testID='productsTreeView'>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductTreeItem
            item={item}
            onToggle={handleToggle}
            selectedIds={selectedIds}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        testID='productsTreeViewList'
      />
    </View>
  );
};

export default ProductsTreeView;
