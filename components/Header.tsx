import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const profil = require('../assets/images/profil1.jpeg'); // Image de fond pour l'en-tête
const buttonImage1 = require('../assets/icons/arrow.svg'); // Image de fond pour le bouton gauche
const buttonImage2 = require('../assets/icons/link.svg'); // Image pour le bouton droit

const Header = () => {
  return (
    <ImageBackground source={profil} style={styles.headerContainer} resizeMode="cover" blurRadius={10}>
      {/* Bannière avec deux boutons */}
      <View style={styles.banner}>
        {/* Bouton gauche */}
        <TouchableOpacity style={styles.button}>
          <Image source={buttonImage1} style={styles.buttonImage} />
        </TouchableOpacity>

        {/* Bouton droit avec fond rouge et rond */}
        <TouchableOpacity style={[styles.button, styles.redButton]}>
          <Image source={buttonImage2} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
      {/* Titre Soulax */}
      <Text style={styles.title}>Soulax</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: 393,
    height: 112,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: 361,
    height: 48,
    flexDirection: 'row',
    gap:'240px',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    width: 48, // Taille des boutons
    height: 48,
    borderRadius: 14, 
    backgroundColor: 'transparent', // Fond par défaut transparent
    alignItems: 'center',
    justifyContent: 'center',
  },
  redButton: {
    backgroundColor: '#FF4A30',
    borderRadius: 54, 

  },
  buttonImage: {
    width: '60%',
    height: '60%',
    resizeMode:'stretch' , // Assure que l'image remplit le bouton
  },
  title: {
    color: '#EAEAEA',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 32,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Effet d'ombre pour contraster avec l'arrière-plan
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});

export default Header;
