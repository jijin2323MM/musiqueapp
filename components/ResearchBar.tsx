import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function ResearchBar() {
    const [searchText, setSearchText] = useState('');
    const handleValidate = () => {
        Alert.alert('Validation', `Vous avez entré : ${searchText}`);
      };

  return (
<View style={styles.searchContainer}>
    <TextInput
    style={styles.searchBar}
    placeholder="Search..."
    value={searchText}
    onChangeText={setSearchText}
    />
    <TouchableOpacity
    style={styles.validateButton}
    onPress={() => alert(`Vous avez entré : ${searchText}`)}
    >
    <Text style={styles.validateButtonText}>Valider</Text>
    </TouchableOpacity>
    </View>  )}

const styles = StyleSheet.create({
    
  searchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  validateButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  validateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

})
