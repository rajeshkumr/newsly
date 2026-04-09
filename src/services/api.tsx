// services/api.ts
import axios from 'axios';
import { NewsItem } from '../types/News';

const API_KEY = 'YOUR_API_KEY';

export const fetchNews = async (): Promise<NewsItem[]> => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  return res.data.articles.map((a: any, index: number) => ({
    id: String(index),
    title: a.title,
    description: a.description,
    urlToImage: a.urlToImage,
    content: a.content,
  }));
};
