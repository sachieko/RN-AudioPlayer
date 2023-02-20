import TrackPlayer, { Track } from 'react-native-track-player';

export const QueueInitialTracksService = async (
  episodes: Track[],
): Promise<void> => {
  await TrackPlayer.add(episodes);
};
