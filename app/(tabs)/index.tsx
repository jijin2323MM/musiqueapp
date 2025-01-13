import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import ParallaxScrollViewwithoutheader from '@/components/ParallaxScrollViewWithoutheader';
import Scratch from '@/components/Scratch';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const rap1 = require('../../assets/images/artist1.png');
  const rap2 = require('../../assets/images/artist2.png');
  const rap3 = require('../../assets/images/artist.png');
  const randomImage = require('../../assets/images/artist.png'); // Remplacez par l'image que vous voulez flouter

  const images = [rap1, rap2, rap3, rap1, rap2];
  const [showBlurredImage, setShowBlurredImage] = useState(false); // État pour contrôler l'image floutée

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollRef = useRef<ScrollView>(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const scrollSpeed = 0.5; // Vitesse du défilement (px par tick)
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollPosition.current += scrollSpeed;
        scrollRef.current.scrollTo({ x: scrollPosition.current, animated: false });

        if (scrollPosition.current >= images.length * 160) {
          // Réinitialisation pour un défilement infini fluide
          scrollPosition.current = 0;
        }
      }
    }, 16); // 60 FPS

    return () => clearInterval(interval); // Nettoyage à la fin
  }, [images]);

  return (
    <ParallaxScrollViewwithoutheader>
      {/* Barre de recherche */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder=""
        />
      </View>

      {/* Bandeau horizontal des artistes avec défilement fluide */}
      <ScrollView
        horizontal
        ref={scrollRef}
        style={styles.artistScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image} style={styles.artistImage} />
          </View>
        ))}
      </ScrollView>
      {/* Texte centré */}
      <View style={styles.textContainer}>
        <Text style={styles.centerText}>Quel artiste tu veux découvrir aujourd’hui ?</Text>
      </View>
      {/* <Scratch></Scratch> */}

      {/* Boutons en bas */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowBlurredImage(true)} // Afficher l'image floutée
        >
          <Text style={styles.buttonText}>Random</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Autre bouton</Text>
        </TouchableOpacity>
      </View>

      {/* Image floutée si l'état est activé */}
      {showBlurredImage && (
        <View style={styles.imageOverlay}>
          <Image source={randomImage} style={styles.blurredImage} />
        </View>
      )}
    </ParallaxScrollViewwithoutheader>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  searchBar: {
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#555',
  },
  artistScroll: {
    marginTop: 20,
    height: 64,
    backgroundColor: 'transparent',
  },
  artistScrollContent: {
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
  },
  artistImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  centerText: {
    fontSize: 50,
    fontFamily: 'Rebond Grotesque',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  // Styles des boutons en bas
  buttonContainer: {
    display: 'flex',
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flexShrink: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#555',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Styles pour l'image floutée
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
  },
  blurredImage: {
    width: 300,
    height: 300,
    borderRadius: 15,
    filter: 'blur(10px)', // Applique un flou
  },
});
