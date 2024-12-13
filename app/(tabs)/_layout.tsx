import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="waveform" color={color} />,
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: 'Live',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="tv" color={color} />,
        }}
      />
      <Tabs.Screen
        name="abonnement"
        options={{
          title: 'abonnement',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="tv" color={color} />,
        }}
      />
      <Tabs.Screen
      name="profil"
      options={{
        title: 'Profil',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
      }}
    />
      
    </Tabs>
  );
}
