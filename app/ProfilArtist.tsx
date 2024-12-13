import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ItemModalProps } from '../components/ItemModal';
import ItemList from '@/components/ItemList';
import GenreList from '@/components/GenreList';
import PostList from '@/components/PostList';
import RecoList from '@/components/RecoList';
import Calendar from '@/components/Calendar';
import Reco1List from '@/components/RecoList1';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}


// Définir les types pour la navigation
type RootStackParamList = {
  ProfilArtist: { item: Item };
};

// Définir le type de la route pour `ProfilArtist`
type ProfilArtistRouteProp = RouteProp<RootStackParamList, 'ProfilArtist'>;



const ProfilArtist: React.FC = () =>{

  const route = useRoute<ProfilArtistRouteProp>();  
  const { item } = route.params;  // on extrait les infos del'artiste

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
;


const profil = require('../assets/images/profil1.jpeg');
const genres = [ "matteo", "art_laurab", "nathnath", "maelalpha"];

const videos = [profil,profil,profil]

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.headerContainer}>
      <Text style={styles.textElement}>Soulax</Text>

      <Image
          source={profil}
          style={styles.avatar} 
      />

      
        {/* <Image source={{ uri: item.image }} style={styles.avatar} /> */}
        {/* <Text style={styles.description}>{item.description}</Text> */}
      </View>
      
      {/* haut*/}
      <View style={styles.textRow}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Suivre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Liens</Text>
        </TouchableOpacity>
      </View>
      

      {/* posts en bas*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setViewMode('grid')}
        >
          <Text style={styles.buttonText}>posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setViewMode('list')}
        >
          <Text style={styles.buttonText}>autres réels</Text>
        </TouchableOpacity>
      </View>

      {/* affichage selon le mode choisi */}
      {viewMode === 'list' ? (
        <ItemList onItemPress={(item) => setSelectedItem(item)} />
      ) : (
        <Reco1List />
      )}
      
    </ScrollView>
  );
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
  genreListContainer1: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  genreListContainer2: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    height: 140,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 340,
    height: 520,
    borderRadius: 50,
    marginRight: 20,
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
  description: {
    fontSize: 18,
    color: '#333',
    flexShrink: 1,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textElement: {
    position : "absolute",
    bottom: 0,
    zIndex: 40,
    fontSize: 30,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  gridText: {
    fontSize: 16,
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#f2f2f2',
    marginBottom: 5,
  },
});

export default ProfilArtist;
