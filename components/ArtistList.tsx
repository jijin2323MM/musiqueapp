import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, Image, Linking, View } from 'react-native';



const profil = require('../assets/images/profilcropped.jpg');
const profil1 = require('../assets/images/artist1.jpeg')
const genres = [ "matteo", "art_laurab", "nathnath", "maelalpha"];

const ArtistList = () => (
  <ScrollView style={styles.genreListContainer}>
    {genres.map((genre, index) => (
      <View key={index} style={styles.genreListItem}>
        <Link href ='/ProfilArtist'>
        <Image
          source={profil}
          style={styles.image}
        />
        <Text style={styles.genreListItemText}>{genre}</Text>
        </Link>
      </View>
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
    color: "grey"
  },
  genreListItem: {
    paddingVertical: 10,

  },
  image: {
    // flex: 1,
    width: '100%',
    alignContent: 'center',
    borderRadius: 300,

    backgroundColor: '#0553',
  },
  genreListItemText: {
    fontSize: 16,
  },
});

export default ArtistList;
