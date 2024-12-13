import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const items = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: `réel ${i + 1}`,
  description: `tema mon super trik ${i + 1}`,
}));

const ItemList = ({ onItemPress }) => (
  <FlatList
    data={items}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.gridItem} onPress={() => onItemPress(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2}
    contentContainerStyle={styles.grid}
  />
);

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 280,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ItemList;
