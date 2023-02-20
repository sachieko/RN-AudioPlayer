import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TracksContext} from '../providers/TracksContext';
import type {Track} from '../providers/TracksContext';

interface TrackItemProps {
  track: Track;
}

const TrackListItem = ({track}: TrackItemProps) => {
  const {setCurrentTrack} = useContext(TracksContext);
  const handleClick = () => {
    setCurrentTrack(track); // When current track changes, update track player in context.
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image source={{uri: track.artwork}} style={styles.artwork} />
      <View>
        <Text style={styles.title}>{track.title}</Text>
        <Text style={styles.publisher}>{track.publisher}</Text>
      </View>
    </TouchableOpacity>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  publisher: {
    fontSize: 14,
    color: '#666',
  },
});

export default TrackListItem;
