import React, { useRef } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';



const RecoList = () => {
 const rap1 = require('../assets/videos/rap1.mp4');
 const rap2 = require('../assets/videos/rap2.mp4');
 const rap3 = require('../assets/videos/rap3.mp4');

 const videos = [rap1,rap2,rap3]
 const genres = [
  'Rap', 'Rock', 'Hip-Hop'
];
  return(
  <ScrollView style={styles.genreListContainer}>
    {genres.map((genre, index) => (
  <ScrollView key = {index} style={styles.genreListContainer} horizontal = {true}>
    <Text style={styles.genreListItemText}>{genre}</Text>
    {videos.map((video, index1) => (
      <TouchableOpacity key={index1} style={styles.genreListItem} onPress={() => alert(`Vous avez sélectionné : ${video}`)}>
        <video controls loop autoPlay muted width="250" height="200" >
        <source src={video}></source>
        </video>
      </TouchableOpacity>
      ))
    }
  </ScrollView>
  ))}
  
  </ScrollView>)
};

const styles = StyleSheet.create({
  genreListContainer: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    height: 400,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  genreListItem: {
    paddingVertical: 10,
  },
  videoStyle: {
    width: '70vw',
    objectFit: 'cover',
  },

  genreListItemText: {
    fontSize: 16,
  },
});

export default RecoList;
