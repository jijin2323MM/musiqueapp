import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const images = [
  require('../../assets/images/Card-playlist.png'),
  require('../../assets/images/Card-playlist1.png'),
  require('../../assets/images/Card-playlist2.png'),
];
const artists = [
  require('../../assets/images/playlist.png'), // Image 1
  require('../../assets/images/playlist1.png'), // Image 2
  require('../../assets/images/playlist2.png'), // Image 3
]
const MarqueeScreen = ({ onBackgroundChange }) => {
  const [index, setIndex] = useState(0);
  const translateXLeft = useRef(new Animated.Value(0)).current;
  const translateYLeft = useRef(new Animated.Value(0)).current;
  const translateXCenter = useRef(new Animated.Value(0)).current;
  const translateYCenter = useRef(new Animated.Value(0)).current;
  const translateYRight = useRef(new Animated.Value(0)).current;
  const translateXRight = useRef(new Animated.Value(0)).current;
  const [background, setBackground] = useState(artists[0]);


  const handleMoveRight = () => {
    Animated.parallel([
      // Mouvement en arc pour l'élément central
      Animated.timing(translateXLeft, {
        toValue: -290, // Vers la gauche
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateYLeft, {
        toValue: 40, // Vers le haut pour créer l'arc
        duration: 800,
        useNativeDriver: true,
      }),

      // Mouvement linéaire pour l'élément de droite (au centre)
      Animated.timing(translateXCenter, {
        toValue: -290,
        duration: 800,
        useNativeDriver: true,
      }),

      // Mouvement linéaire pour l'élément de gauche (à droite)
      Animated.timing(translateYCenter, {
        toValue: 40, // Vers la droite
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateXRight, {
        toValue: -290, // Vers la droite
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateYRight, {
        toValue: -40, // Vers la droite
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Réinitialiser les positions après l'animation
      translateXLeft.setValue(0);
      translateYLeft.setValue(0);
      translateXCenter.setValue(0)
      translateYCenter.setValue(0);
      
      translateXRight.setValue(0)
      translateYRight.setValue(0);

      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        const newBackground = artists[newIndex];
        setBackground(newBackground);
        onBackgroundChange?.(newBackground); // Notifie le parent
        return newIndex; // Mettre à jour la couleur de fond
      })
      ;
    });
  };

  return (
    <View style={styles.container}>
      {/* Élément de gauche */}

      <Animated.View
        style={[
          styles.sideContainer,
          {
            transform: [
              { translateX: translateXLeft },
              { translateY: translateYLeft },
            ],
          },
        ]}
      >
        <Animated.Image source={images[(index + 2) % images.length]} style={styles.image} />
      </Animated.View>

      {/* Élément central */}
      <TouchableOpacity onPress={handleMoveRight}>

        <Animated.View
          style={[
            styles.centerContainer,
            {
              transform: [
                { translateX: translateXCenter },
                { translateY: translateYCenter },
              ],
            },
          ]}
        >
          <Animated.Image source={images[index]} style={styles.image} />
        </Animated.View>
      </TouchableOpacity>

      {/* Élément de droite */}
      <Animated.View
        style={[
          styles.sideContainer,
          {
            transform: [
              { translateX: translateXRight },
              { translateY: translateYRight },
            ],
          },
        ]}
      >
        <Animated.Image source={images[(index + 1) % images.length]} style={styles.image} />
      </Animated.View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '18px'
  },
  sideContainer: {
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 284,
    height: 284,
    marginHorizontal: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f0f0f0',
  },
});

export default MarqueeScreen;
