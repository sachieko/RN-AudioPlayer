import React, { Fragment, useContext } from 'react';
import {
  ScrollView,
  View,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import { TracksContext } from '../providers/TracksContext';
import TrackListItem from './TrackListItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TrackList = (): JSX.Element => {
  const { tracks } = useContext(TracksContext);
  const isDarkMode = useColorScheme() === 'dark';
  const trackListStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  if (tracks.length === 0) {
    return (
      <View style={trackListStyle}>
        <ActivityIndicator size={40} />
      </View>
    );
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={trackListStyle}>
        <View>
          {tracks.map(track => (
            <TrackListItem key={track.id} track={track} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default TrackList;
