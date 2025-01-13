import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleButton from './ToggleButton';
import GenreList from './GenreList';
import ItemList from './ItemList';
import ItemModal from './ItemModal';
import RecoList from './RecoList';
import ArtistList from './ArtistList';
import {  Chip } from 'react-native-paper';

export default function ToggleMenu() {
    interface Item {
        id: number;
        title: string;
        description: string;
        image: string;
      }
  const [activeToggle, setActiveToggle] = useState('Recogenre');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <View style={styles.container}>
      {/*Boutons pour choisir entre les deux vues */}
      <View style={styles.toggleButtonsContainer}>
      <Chip icon="information" onPress={() => setActiveToggle('Recogenre')}>Playlists</Chip>
    <Chip icon="information" onPress={() => setActiveToggle('Recoartiste')}>Artiste</Chip>

      </View>

      {/* Affichage conditionnel en fonction du toggle actif */}
      {activeToggle === 'Recogenre' ? (
        // <ItemList onItemPress={(item) => setSelectedItem(item)} />
        <RecoList/>
      ) : (
        <ArtistList />
      )}

      {/* Modal pour afficher les détails de l'élément sélectionné */}
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
