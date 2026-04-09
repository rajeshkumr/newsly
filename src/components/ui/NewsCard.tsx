// components/NewsCard.tsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import { NewsItem } from '../../types/News';
import { useBookmarks } from '../../store/useBookmarks';

export default function NewsCard({ item }: { item: NewsItem }) {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isSaved = bookmarks.some(b => b.id === item.id);

  return (
    <Card style={styles.card}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text>{item.description}</Text>
      </Card.Content>

      <IconButton
        icon={isSaved ? 'bookmark' : 'bookmark-outline'}
        onPress={() => toggleBookmark(item)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, overflow: 'hidden' },
  image: { height: 200 },
});