import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleButton from './ToggleButton';
import GenreList from './GenreList';
import ItemList from './ItemList';
import ItemModal from './ItemModal';

export default function ToggleMenu() {
    interface Item {
        id: number;
        title: string;
        description: string;
        image: string;
      }
  const [activeToggle, setActiveToggle] = useState('For You');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <View style={styles.container}>
      {/*Boutons pour choisir entre les deux vues */}
      <View style={styles.toggleButtonsContainer}>
        <ToggleButton
          label="For You"
          isActive={activeToggle === 'For You'}
          onPress={() => setActiveToggle('For You')}
        />
        <ToggleButton
          label="Genre"
          isActive={activeToggle === 'Genre'}
          onPress={() => setActiveToggle('Genre')}
        />
      </View>

      {/* Affichage conditionnel en fonction du toggle actif */}
      {activeToggle === 'For You' ? (
        <ItemList onItemPress={(item) => setSelectedItem(item)} />
      ) : (
        <GenreList />
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
