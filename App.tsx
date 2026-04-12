// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation';
import { useBookmarks } from './src/store/useBookmarks';

export default function App() {
  const loadBookmarks = useBookmarks(state => state.loadBookmarks);
  React.useEffect(() => {
    loadBookmarks();
  }, []);

  return (
      <PaperProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PaperProvider>
  );
}