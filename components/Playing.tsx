import React, { useContext } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { TracksContext } from '../providers/TracksContext';

const Playing = (): JSX.Element => {
  const { currentTrack } = useContext(TracksContext);
  const isDarkMode = useColorScheme() === 'dark';
  // const handleClear = async (): Promise<void> => {
  //   await TrackPlayer.pause();
  //   setCurrentTrack(null);
  // };

  return (
    <View style={styles.container}>
      {currentTrack && (
        <Text
          style={isDarkMode ? styles.playingStyleDark : styles.playingStyle}
          numberOfLines={1}>
          {currentTrack.publisher} - {currentTrack.title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#666',
  },
  playingStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#666',
  },
  playingStyleDark: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Playing;
