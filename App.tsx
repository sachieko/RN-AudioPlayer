/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {TrackProvider} from './providers/TracksContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TrackList from './components/TrackList';
import Playing from './components/Playing';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text>Placeholder for the App header.</Text>
      </View>
      <TrackProvider>
        <TrackList />
        <Playing />
      </TrackProvider>
    </SafeAreaView>
  );
}

export default App;
