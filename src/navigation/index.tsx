// navigation/index.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { NewsItem } from '../types/News';

export type RootStackParamList = {
  Home: undefined;
  Detail: { item: NewsItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
