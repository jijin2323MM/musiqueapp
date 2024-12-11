import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const genres = [
  'Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classique', 'Électro',
  'Reggae', 'Blues', 'Country', 'R&B', 'Soul', 'Metal', 'Funk', 'Disco', 'Folk', 'Gospel'
];

const GenreList = () => (
  <ScrollView style={styles.genreListContainer}>
    {genres.map((genre, index) => (
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

export default GenreList;
