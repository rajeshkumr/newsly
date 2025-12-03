import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ListRenderItem,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from "lucide-react-native";

// ------------ Types ------------ //
interface NewsItem {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
}

export default function TrendingNewsScreen(): JSX.Element {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNews = async () => {
    try {
      setLoading(true);

      // Fake API data
      const fakeData: NewsItem[] = [
        {
          id: 1,
          title: "AI Breakthrough: GPT Models Evolve Again",
          image:
            "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800",
          category: "Technology",
          time: "1 hour ago",
        },
        {
          id: 2,
          title: "Global Markets Rally After Economic Update",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",
          category: "Finance",
          time: "2 hours ago",
        },
        {
          id: 3,
          title: "New Health Study Reveals Surprising Results",
          image:
            "https://images.unsplash.com/photo-1576765974235-dcf1f3ea9ad7?auto=format&fit=crop&w=800",
          category: "Health",
          time: "3 hours ago",
        },
      ];

      setNews(fakeData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Typed renderItem
  const renderItem: ListRenderItem<NewsItem> = ({ item }) => (
    <TouchableOpacity className="mb-5 active:opacity-80">
      <View className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-900">
        <Image source={{ uri: item.image }} className="h-48 w-full" />

        {/* <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          className="absolute bottom-0 left-0 w-full h-24 px-4 flex justify-end pb-3"
        >
          <Text className="text-white text-lg font-semibold">{item.title}</Text>
        </LinearGradient> */}

        <View className="px-4 py-3">
          <View className="flex-row items-center space-x-2">
            <View className="bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
              <Text className="text-indigo-700 dark:text-indigo-300 text-xs">
                {item.category}
              </Text>
            </View>

            <Text className="text-xs text-gray-500">{item.time}</Text>
          </View>

          <View className="mt-3 flex-row items-center">
            <Text className="text-indigo-600 font-semibold">Read more</Text>
            <ArrowRight size={18} color="#4F46E5" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 dark:bg-black px-4 pt-10">
      <Text className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
        Trending News
      </Text>

      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchNews} />
        }
      />
    </View>
  );
}
