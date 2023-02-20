import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';

const performSkipToNext = () => TrackPlayer.skipToNext();
const performSkipToPrevious = () => TrackPlayer.skipToPrevious();
const performPlay = () => TrackPlayer.play();
const performPause = () => TrackPlayer.pause();

const PlayerControls = (): JSX.Element => {
  const playback: State = usePlaybackState();
  const getStatusString = (input: State): string => {
    const status = input.toString();
    return status[0].toUpperCase() + status.slice(1);
  };

  const status = getStatusString(playback);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Prev" onPress={performSkipToPrevious} />
        <Button title="Pause" onPress={performPause} />
        <Text>{status}</Text>
        <Button title="Play" onPress={performPlay} />
        <Button title="Next" onPress={performSkipToNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default PlayerControls;
