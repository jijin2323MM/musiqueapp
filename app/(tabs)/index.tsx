import { Image, StyleSheet, Platform, TextInput, TouchableOpacity, Text, FlatList, Alert, ScrollView, Modal } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Link } from 'expo-router';
import { View } from 'react-native';
import { useRef, useState } from 'react';
import ResearchBar from '@/components/ResearchBar';
import ToggleMenu from '@/components/ToggleMenu';
import Video, { VideoRef } from 'react-native-video';


export default function HomeScreen() {
  const videoRef = useRef<VideoRef>(null);
 const background = require('../../assets/test.mp4');
 console.log(background)


  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D9D9D9', dark: '#D9D9D9' }}
      headerImage={
        <Image
          source={require('@/assets/images/couvertre.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ResearchBar/>
    
      <ToggleMenu/>
      

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  
  reactLogo: {
    height: 178,
    bottom: 0,
    left: 0,
    position: 'absolute',
    objectFit: "contain"
  },
  
});
