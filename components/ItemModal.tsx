import { NavigationContainer } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import React from 'react';
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';


// Définir le type de l'élément (item)
interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}
  
  
// Définir le type des props pour le composant ItemModal
export interface ItemModalProps {
  item: Item; // L'élément sélectionné
  onClose: () => void; // Fonction pour fermer le modal
}
  

const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
    const navigation = useNavigation();
    return(
  <Modal visible={!!item} transparent={true} animationType="slide" onRequestClose={onClose}>
    <View style={styles.modalContainer}>
      <Image source={{ uri: item.image }} style={styles.modalBackground} />
      <View style={styles.modalContent}>
        {/* Section Avatar + Titre côte à côte */}            
        <View style={styles.headerContainer}>
            <Link href ='/ItemDetails'>
          <Image source={{ uri: item.image }} style={styles.modalAvatar} />
          <Text style={styles.modalTitle}>{item.title}</Text>
          </Link>
        </View>

        {/* Section Description + Save Button côte à côte */}
        <View style={styles.bottomContainer}>
          <Text style={styles.modalDescription}>{item.description}</Text>
          <TouchableOpacity style={styles.saveButton} onPress={() => alert('Élément sauvegardé !')}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Retour</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}
;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row', // Align avatar and title horizontally
    alignItems: 'center',
    marginBottom: 20,
  },
  modalAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10, // Space between avatar and title
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1, // To avoid title overflow
  },
  bottomContainer: {
    flexDirection: 'row', // Align description and button horizontally
    justifyContent: 'space-between', // Space between text and button
    alignItems: 'center',
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    color: '#ccc',
    flex: 1, // Allow the description to take available space
  },
  saveButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginLeft: 10, // Space between description and button
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ItemModal;
