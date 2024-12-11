import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Définir les types des props du ToggleButton
interface ToggleButtonProps {
    label: string;         // Label du bouton, de type chaîne de caractères
    isActive: boolean;     // Etat actif ou inactif, de type booléen
    onPress: () => void;   // Fonction appelée lors du clic, sans valeur de retour
  }
  

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, isActive, onPress }) => (
  <TouchableOpacity
    style={[styles.button, isActive && styles.activeButton]}
    onPress={onPress}
  >
    <Text style={isActive ? styles.activeText : styles.inactiveText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#000',
  },
});

export default ToggleButton;
