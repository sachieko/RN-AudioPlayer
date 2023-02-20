import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { TracksContext } from '../providers/TracksContext';

const Playing = (): JSX.Element => {
  const { currentTrack, setCurrentTrack } = useContext(TracksContext);

  const handleClear = async (): Promise<void> => {
    await TrackPlayer.pause();
    setCurrentTrack(null);
  };

  return (
    <View>
      {currentTrack && (
        <View>
          <Text>
            {currentTrack.publisher}:{currentTrack.title}
          </Text>
        </View>
      )}
      <Button title="Clear current track" onPress={handleClear} />
    </View>
  );
};

export default Playing;
