// screens/HomeScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Swiper from 'react-native-deck-swiper';
import { fetchNews } from '../services/api';
import { NewsItem } from '../types/News';
import NewsCard from '../components/ui/NewsCard';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await fetchNews();

      // 🧠 simple AI personalization (prioritize tech keywords)
      const sorted = data.sort((a, b) =>
        (b.title?.includes('Tech') ? 1 : 0) -
        (a.title?.includes('Tech') ? 1 : 0)
      );

      setNews(sorted);
    }
      catch (err){
        console.error("Error in loading news");
        console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={news}
        renderCard={(card: NewsItem) =>
          card ? <NewsCard item={card} /> : null
        }
        onTapCard={(index) => {
            const item = news[index];
          if (!item) {
            return;  // 🛑 prevent crash
          }
          navigation.navigate('Detail', { item: news[index] });
        }
        }
        stackSize={3}
        verticalSwipe={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});