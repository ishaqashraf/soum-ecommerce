import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onRightAction }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onRightAction}>
        <Image
          source={require('../../../assets/filter.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgb(19, 0, 70)',
  },
  logo: {
    height: 20,
    width: 20,
  },
  title: {
    color: '#fff',
  },
  filterIcon: {
    height: 20,
    width: 20,
  },
});

export default Header;
