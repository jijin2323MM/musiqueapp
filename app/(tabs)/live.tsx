import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebaseConfig";

export default function TabTwoScreen() {

  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, 'uicesarfox+01@gmail.com', 'coucou')
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('tip top ça marche normalement', user);
  })
  .catch((error) => {
    console.error('tip top ça marche pas', error);
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Live</ThemedText>
      </ThemedView>
      <ThemedText>Ceci est la page live de l'application de menu.</ThemedText>
     
    </ParallaxScrollView>
  );
}




const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
