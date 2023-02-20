import TrackPlayer from 'react-native-track-player';
import type { Track } from '../providers/TracksContext';

export const QueueInitialTracksService = async (
  episodes: Track[],
): Promise<void> => {
  await TrackPlayer.add(episodes);
};
