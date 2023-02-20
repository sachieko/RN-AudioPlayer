import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { TracksContext } from '../providers/TracksContext';
import type { Track } from '../providers/TracksContext';
import TrackPlayer from 'react-native-track-player';

interface TrackItemProps {
  track: Track;
}

const TrackListItem = ({ track }: TrackItemProps): JSX.Element => {
  const { setCurrentTrack, tracks } = useContext(TracksContext);
  const handleClick = async () => {
    setCurrentTrack(track);
    const trackIndex = tracks.findIndex(trackItem => trackItem.id === track.id);
    await TrackPlayer.skip(trackIndex);
    await TrackPlayer.play();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: track.artwork }} style={styles.artwork} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{track.title}</Text>
          <Text style={styles.publisher}>{track.publisher}</Text>
        </View>
        <TouchableHighlight onPress={handleClick} style={styles.playButton}>
          <Text>Play</Text>
        </TouchableHighlight>
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  publisher: {
    fontSize: 14,
    color: '#666',
  },
  playButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default TrackListItem;
