import React, { useRef, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView,PanResponder } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import ItemList from '@/components/ItemList';
import RecoList from '@/components/RecoList';
import Reco1List from '@/components/RecoList1';
import { BlurView } from 'expo-blur';
import { Svg, Circle, Line } from "react-native-svg";
import Knob from '@/components/ui/Knob';
import MarqueeScreen from '@/components/ui/MarqueeScreen';
import Switch from 'react-native-switch-toggles';
import MarqueeScreenArtist from '@/components/ui/MarqueeScreenArtist';
import Header from '@/components/Header';


interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Navigation types
type RootStackParamList = {
  ProfilArtist: { item: Item };
};

type ProfilArtistRouteProp = RouteProp<RootStackParamList, 'ProfilArtist'>;

const ProfilArtist: React.FC = () => {
  
  const route = useRoute<ProfilArtistRouteProp>();
  const { item } = route.params || {}; // Extract artist info

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const profil = require('../../assets/images/artistbanner.png');
  const genres = ['matteo', 'art_laurab', 'nathnath', 'maelalpha'];
  const videos = [profil, profil, profil];

  const handleBackgroundChange = (color) => {
    setBackgroundColor(color); // Mettre à jour la couleur d'arrière-plan
  };
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = useState(require('../../assets/images/playlist.png')); // Initialiser avec la première couleur
  

  return (
    <>
    {/* <BlurView intensity={90} style={StyleSheet.absoluteFill}> */}
    {/* <Image source={profil} style={styles.backgroundImage}   
    /> */}
    <Header></Header>

    <Image source={backgroundColor} style={styles.backgroundImageM} blurRadius={2}/>

    {/* </BlurView> */}

    <ScrollView style={[styles.container, { backgroundColor }]}>


      <View style={styles.navButtonsContainer}>
      <Switch
    size={60}
    value={isEnabled}
    onChange={(value) => setIsEnabled(value)}
    activeTrackColor={'rgba(0,0,0,0.3)'}
    inactiveTrackColor= {'rgba(0,0,0,0.3)'}
    activeThumbColor= {'rgb(255, 32, 32)'}
    inactiveThumbColor= {'rgb(255, 32, 32)'}

    renderInactiveThumbIcon={() => (
      <Image source={require('@/assets/icons/mic.svg')} style={{ objectFit: 'cover'}} />
    )}
    renderActiveThumbIcon={() => (
      <Image source={require('@/assets/icons/bib.svg')} style={{ objectFit: 'cover'}} />
    )}
  />
        {/* <Button mode="contained" onPress={() => setViewMode('grid')}>
          Accueil
        </Button>
        <Button mode="contained" onPress={() => setViewMode('list')}>
          Feed
        </Button> */}
      </View>
      {/* Passer la fonction de callback au composant */}
      {!isEnabled?       <MarqueeScreen onBackgroundChange={handleBackgroundChange} />:     
        <MarqueeScreenArtist onBackgroundChange={handleBackgroundChange} />
    }
    </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({
  backgroundImageM: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adapter l'image à l'écran
    zIndex: -1, // Derrière tout le contenu
  },

  text: {
    marginTop: 20,
    fontSize: 18,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  genreContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  genreText: {
    fontSize: 16,
    color: '#333',
  },
  videoContainer: {
    marginBottom: 20,
  },
  videoThumbnail: {
    width: 150,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  headerContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    display: 'flex',
  },
  backgroundImage: {
    borderRadius: '0px 0px 16px 16px',
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 20

  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    zIndex: 10, // Pour s'assurer que le texte est au-dessus de l'image
  },
  linkButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee', // Couleur du bouton
  },
  buttonLabel: {
    fontSize: 14,
    color: 'white',
  },
});

export default ProfilArtist;
