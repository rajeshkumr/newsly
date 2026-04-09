// screens/DetailScreen.tsx
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function DetailScreen({ route }: any) {
  const item = route?.params?.item;

  if (!item) {
    return null; // or fallback UI
  }

  return (
    <ScrollView>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <Text variant="titleLarge">{item.title}</Text>
      <Text>{item.content || item.description}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: { height: 250, width: '100%' },
});
