import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const posts = [
  "omg j'<3 trop les chill guys", "omg j'<3 trop les chill guys", "omg j'<3 trop les chill guys"]

const PostList = () => (
  <ScrollView style={styles.genreListContainer}>
    {posts.map((genre, index) => (
      <TouchableOpacity key={index} style={styles.genreListItem} onPress={() => alert(`Vous avez sélectionné : ${genre}`)}>
        <Text style={styles.genreListItemText}>{genre}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  genreListContainer: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  genreListItem: {
    paddingVertical: 10,
  },
  genreListItemText: {
    fontSize: 16,
  },
});

export default PostList;
