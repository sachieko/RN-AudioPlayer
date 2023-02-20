/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import { TracksProvider } from './providers/TracksContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TrackList from './components/TrackList';
import Playing from './components/Playing';
import PlayerControls from './components/PlayerControls';
import Header from './components/Header';
import { SetupService } from './services/SetupService';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const setup = async () => {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);
    };
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <TracksProvider>
        <TrackList />
        <Playing />
        <PlayerControls />
      </TracksProvider>
    </SafeAreaView>
  );
}

export default App;
