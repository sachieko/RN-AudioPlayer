import React, { useContext } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';
import { TracksContext } from '../providers/TracksContext';

const PlayerControls = (): JSX.Element => {
  const { setCurrentTrack } = useContext(TracksContext);
  const playback: State = usePlaybackState();

  const updateCurrentTrack = async (): Promise<void> => {
    const index = await TrackPlayer.getCurrentTrack();
    TrackPlayer.getTrack(index as number).then(track => {
      setCurrentTrack(track);
    });
  };
  const performSkipToNext = async () => {
    TrackPlayer.skipToNext();
    updateCurrentTrack();
  };
  const performSkipToPrevious = () => {
    TrackPlayer.skipToPrevious();
    updateCurrentTrack();
  };
  const performPlay = () => TrackPlayer.play();
  const performPause = () => TrackPlayer.pause();
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
        <Text style={styles.textContainer}>{status}</Text>
        <Button title="Play" onPress={performPlay} />
        <Button title="Next" onPress={performSkipToNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textContainer: {
    color: 'violet',
  },
});

export default PlayerControls;
