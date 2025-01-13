import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, PanResponder, TouchableOpacity, FlatList, Image, ImageBackground, ImageComponent } from "react-native";
import Slider from "@react-native-community/slider"; 

import { Svg, Circle, Line } from "react-native-svg";
import MarqueeScreen from "./MarqueeScreen";

const profil = require('../../assets/images/profil1.jpeg');

const musicList = [
    { id: 0, title: "Song 1", image: require('../../assets/images/play1.png') },
    { id: 1, title: "Song 2", image: require('../../assets/images/play2.png') },
    { id: 2, title: "Song 3", image: require('../../assets/images/play3.png') },
  ];


const Knob = () => {
    const [angle, setAngle] = useState(0); // Angle de rotation
    const [selectedIndex, setSelectedIndex] = useState(0); // Index sélectionné
    const [size, setSize] = useState(10); // Taille par défaut du bouton
    const center = size / 2;
  
    // Détecter les gestes
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
          const { dx, dy } = gestureState;
          const newAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // Convertir en degrés
          setAngle(newAngle);
  
          // Calculer l'index sélectionné
          const totalItems = musicList.length;
          const newIndex = Math.floor(((newAngle + 360) % 360) / (360 / totalItems));
          setSelectedIndex(newIndex);
        },
      })
    ).current;
  
    const renderItem = ({ item, index }) => {
        return (
          <TouchableOpacity
            style={[
              styles.carouselItem,
              index === selectedIndex ? styles.selectedItem : null,
            ]}
            onPress={() => {
              setSelectedIndex(index);
              const totalItems = musicList.length;
              const newAngle = (index * 360) / totalItems; // Mettre à jour l'angle
              setAngle(newAngle);
            }}
          >
            {/* <Image source={item.image } style={styles.imageBackground} /> */}

              {/* <Text style={styles.itemText}>{item.title}</Text> */}
          </TouchableOpacity>
        );  };

  

  return (<View style={styles.container}>
    <FlatList
        data={musicList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.carousel}
        showsHorizontalScrollIndicator={false}
        extraData={selectedIndex} 
      />
    {/* Bouton rotatif */}
    <View
      style={styles.knobContainer}
      {...panResponder.panHandlers}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setSize(Math.min(width, height));
      }}
    >
      <Svg height={size} width={size}>
        {/* Cercle */}
        <Circle cx={center} cy={center} r={center - 10} stroke="grey" strokeWidth="2" fill="lightgrey" />
        {/* Indicateur */}
        <Line
          x1={center}
          y1={center}
          x2={center + (center - 20) * Math.cos((angle - 90) * (Math.PI / 180))}
          y2={center + (center - 20) * Math.sin((angle - 90) * (Math.PI / 180))}
          stroke="black"
          strokeWidth="3"
        />
      </Svg>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    knobContainer: {
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    songText: {
      fontSize: 18,
      marginVertical: 20,
      textAlign: "center",
    },
    carousel: {
      marginTop: 20,
    },
    carouselItem: {
      alignItems: "center",
      marginHorizontal: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "transparent",
    },
    selectedItem: {
      borderColor: "#1EB1FC",
    },
    imageBackground: {
      width: 200,
      height: 200,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    itemText: {
      color: "white",
      fontSize: 14,
      textAlign: "center",
    },
  });

export default Knob;
