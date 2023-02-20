import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { TracksContext } from '../providers/TracksContext';

const Playing = (): JSX.Element => {
  const { currentTrack, setCurrentTrack } = useContext(TracksContext);

  return (
    <View>
      {currentTrack && (
        <View>
          <Text>
            {currentTrack.publisher}:{currentTrack.title}
          </Text>
        </View>
      )}
      <Button
        title="Clear current track"
        onPress={() => setCurrentTrack(null)}
      />
    </View>
  );
};

export default Playing;
