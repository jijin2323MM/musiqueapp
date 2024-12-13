import React, { useRef } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';



const Reco1List = () => {
  const rap1 = require('../assets/videos/rap1.mp4');
  const rap2 = require('../assets/videos/rap2.mp4');
  const rap3 = require('../assets/videos/rap3.mp4');
 
  const videos = [rap1,rap2,rap3]
 const genres = [
  'Mes super titres'
];
const artists = ['laura']
const artist1 = require('../assets/images/artist1.jpeg')
const profil = require('../assets/images/profil1.jpeg');

  return(
  <ScrollView style={styles.genreListContainer}>
    {genres.map((genre, index) => (
  <ScrollView key = {index} style={styles.genreListContainer} horizontal = {true}>
    <Text style={styles.genreListItemText}>{genre}</Text>
    {videos.map((video, index1) => (
      <TouchableOpacity key={index1} style={styles.genreListItem} onPress={() => alert(`Vous avez sélectionné : ${video}`)}>
        <video controls width="250" height="200">
        <source src={video}></source>
        </video>
      </TouchableOpacity>
      ))
    }
  </ScrollView>
  ))}
  <Text>Mes recos</Text>
          <ScrollView style={styles.genreListContainer} horizontal = {true}>
            {artists.map((video, index1) => (
              <TouchableOpacity key={index1}  onPress={() => alert(`Vous avez sélectionné : ${video}`)}>
        <Image
          source={artist1}
          style={styles.avatar1} 
      />
      <Text>art_laurab</Text>
      </TouchableOpacity>))
      
      }
      </ScrollView> 
  </ScrollView>)
};

const styles = StyleSheet.create({
  genreListContainer: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    height: 200,
    borderWidth: 1,
    borderColor: '#ddd',
  }, 
  avatar1: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 20,
  },
  genreListItem: {
    paddingVertical: 10,
  },
  genreListItemText: {
    fontSize: 16,
  },
});

export default Reco1List;
