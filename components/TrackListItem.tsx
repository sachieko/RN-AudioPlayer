import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

type TrackProps = PropsWithChildren<{
  id: number;
  title: string;
  publisher: string;
  mp3: string;
  artwork: string;
}>;

const TrackListItem = ({
  id,
  title,
  publisher,
  mp3,
  artwork,
}: TrackProps): JSX.Element => {
  console.log(`${id}: links to mp3 url ${mp3}`);
  return (
    <View style={styles.container}>
      <Image source={{uri: artwork}} style={styles.artwork} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.publisher}>{publisher}</Text>
      </View>
    </View>
  );
};

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
