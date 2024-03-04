import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ProductTreeItem = ({item, onToggle, selectedIds}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container} testID="productTreeItem">
      <View style={styles.itemContainer}>
        <CheckBox
          boxType="square"
          style={styles.checkbox}
          disabled={false}
          value={selectedIds?.includes(item.id)}
          onValueChange={() => onToggle(item.id)}
          testID="productTreeItemCheckbox"
        />
        <TouchableOpacity
          testID="productTreeItemToggle"
          onPress={handleToggle}
          style={styles.textContainer}>
          <Text testID="productTreeItemLabelCount" style={styles.text}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
      {item.labelCount && (
        <Text style={styles.labelCount}>{item.labelCount}</Text>
      )}
      {isOpen && item.children && (
        <View style={styles.childrenContainer}>
          {item.children.map(child => (
            <ProductTreeItem
              key={child.id}
              item={child}
              onToggle={onToggle}
              selectedIds={selectedIds}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  textContainer: {
    marginRight: 5,
    fontSize: 26,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
  },
  labelCount: {
    fontSize: 9,
    marginLeft: 32,
    marginTop: 2,
    color: 'gray',
  },
  childrenContainer: {
    marginLeft: 16,
    marginTop: 16,
  },
});

export default ProductTreeItem;
