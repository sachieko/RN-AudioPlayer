import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';
import {TracksContext} from '../providers/TracksContext';

const Playing = () => {
  const {currentTrack, setCurrentTrack} = useContext(TracksContext);

  const handleClick = () => {
    setCurrentTrack(null); // clear track
  };

  return (
    <View>
      {currentTrack && (
        <Text>
          {currentTrack.publisher}:{currentTrack.title}
        </Text>
      )}
      <Button title="Clear current track" onPress={handleClick} />
    </View>
  );
};

export default Playing;
