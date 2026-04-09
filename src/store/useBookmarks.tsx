// store/useBookmarks.ts
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NewsItem } from '../types/News';

interface Store {
  bookmarks: NewsItem[];
  toggleBookmark: (item: NewsItem) => void;
  loadBookmarks: () => Promise<void>;
}

export const useBookmarks = create<Store>((set, get) => ({
  bookmarks: [],

  toggleBookmark: async (item) => {
    const exists = get().bookmarks.find(b => b.id === item.id);
    const updated = exists
      ? get().bookmarks.filter(b => b.id !== item.id)
      : [...get().bookmarks, item];

    set({ bookmarks: updated });
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updated));
  },

  loadBookmarks: async () => {
    const data = await AsyncStorage.getItem('bookmarks');
    if (data) {set({ bookmarks: JSON.parse(data) });}
  },
}));
