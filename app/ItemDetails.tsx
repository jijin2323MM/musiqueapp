import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ItemModalProps } from '../components/ItemModal';
import ItemList from '@/components/ItemList';
import GenreList from '@/components/GenreList';
import PostList from '@/components/PostList';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}


// Définir les types pour la navigation
type RootStackParamList = {
  ItemDetails: { item: Item };
};

// Définir le type de la route pour `ItemDetails`
type ItemDetailsRouteProp = RouteProp<RootStackParamList, 'ItemDetails'>;



const ItemDetails: React.FC = () =>{

  const route = useRoute<ItemDetailsRouteProp>();  // Utiliser useRoute avec le bon type pour les paramètres
  const { item } = route.params;  // Extraire l'élément passé en paramètre

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);


  const renderGridItem = ({ item }: { item: any }) => (
    <View style={styles.gridItem}>
      <Text style={styles.gridText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Image source={{ uri: item.image }} style={styles.avatar} /> */}
        {/* <Text style={styles.description}>{item.description}</Text> */}
      </View>
      
      {/* Section avec deux éléments de texte côte à côte */}
      <View style={styles.textRow}>
        <Text style={styles.textElement}>nom artiste</Text>
        <Text style={styles.textElement}>un autre truc</Text>
      </View>

      {/* Section des boutons en bas */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setViewMode('grid')}
        >
          <Text style={styles.buttonText}>les autres réels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setViewMode('list')}
        >
          <Text style={styles.buttonText}>posts</Text>
        </TouchableOpacity>
      </View>

      {/* Affichage selon le mode choisi */}
      {viewMode === 'grid' ? (
        <ItemList onItemPress={(item) => setSelectedItem(item)} />
      ) : (
        <PostList/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
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
    fontSize: 16,
    color: '#333',
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

export default ItemDetails;
