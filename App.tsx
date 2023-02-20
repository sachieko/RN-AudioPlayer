/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {MyProvider} from './providers/TracksContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TrackListItem from './components/TrackListItem';
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
      <MyProvider>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <View>
              <TrackListItem
                id={1}
                title={'Monster'}
                publisher={'Starset'}
                mp3={'https://http.cat/200'}
                artwork={'https://http.cat/200'}
              />
              <TrackListItem
                id={2}
                title={'The Sin and the Sentence'}
                publisher={'Trivium'}
                mp3={'https://http.cat/200'}
                artwork={'https://http.cat/200'}
              />
            </View>
          </View>
        </ScrollView>
        <Playing />
      </MyProvider>
    </SafeAreaView>
  );
}

export default App;
