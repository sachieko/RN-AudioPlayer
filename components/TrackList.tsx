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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (tracks.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {tracks.map(track => (
            <TrackListItem key={track.id} track={track} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default TrackList;
