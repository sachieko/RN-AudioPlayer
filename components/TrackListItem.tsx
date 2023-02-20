import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, useColorScheme } from 'react-native';
import { TracksContext } from '../providers/TracksContext';
import TrackPlayer, { Track } from 'react-native-track-player';
import Button from './Button';

interface TrackItemProps {
  track: Track;
}

const TrackListItem = ({ track }: TrackItemProps): JSX.Element => {
  const { setCurrentTrack, tracks } = useContext(TracksContext);
  const isDarkMode = useColorScheme() === 'dark';
  const handleClick = async () => {
    TrackPlayer.pause();
    setCurrentTrack(track);
    const trackIndex = tracks.findIndex(trackItem => trackItem.id === track.id);
    await TrackPlayer.skip(trackIndex);
    await TrackPlayer.play();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: `${track.artwork}` }} style={styles.artwork} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={isDarkMode ? styles.titleDark : styles.title}>
            {track.title}
          </Text>
          <Text style={isDarkMode ? styles.publisherDark : styles.publisher}>
            {track.publisher}
          </Text>
        </View>
        <Button onPress={handleClick} title="Play" />
      </View>
    </View>
  );
};
// Styles for tracklist below.
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleDark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  publisher: {
    fontSize: 14,
    color: '#666',
  },
  publisherDark: {
    fontSize: 14,
    color: '#BBBBBB',
  },
  playButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  playButtonText: {
    color: 'white',
  },
});

export default TrackListItem;
