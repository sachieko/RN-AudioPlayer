import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';
import { TracksContext } from '../providers/TracksContext';
import Button from './Button';

const PlayerControls = (): JSX.Element => {
  const { setCurrentTrack } = useContext(TracksContext);
  const playback: State = usePlaybackState();

  const updateCurrentTrack = async (): Promise<void> => {
    const index = await TrackPlayer.getCurrentTrack();
    TrackPlayer.getTrack(index as number).then(track => {
      setCurrentTrack(track); // Update the currently displayed track
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
        <Button
          title="<< Prev"
          textStyles={buttonStyles.title}
          onPress={performSkipToPrevious}
        />
        <Button
          title="|| Pause"
          textStyles={buttonStyles.title}
          onPress={performPause}
        />
        <Button
          title="> Play"
          textStyles={buttonStyles.title}
          onPress={performPlay}
        />
        <Button
          title=">> Next"
          textStyles={buttonStyles.title}
          onPress={performSkipToNext}
        />
      </View>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
};
// Style variables for the player container
// Button styles are not used as they are being passed to a custom button component
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statusText: {
    height: 25,
    color: '#666',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
// These are passed to custom button components
// The possible categories are: title, button
// Title controls the text styles
// Button controls view styles.
const buttonStyles = {
  title: {
    fontSize: 16,
    color: 'white',
  },
};

export default PlayerControls;
