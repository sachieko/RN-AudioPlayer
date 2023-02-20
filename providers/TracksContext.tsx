import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import TrackPlayer, { Track } from 'react-native-track-player';
import { QueueInitialTracksService } from '../services/QueueTracksService';
// This is the shape of the track data in the API
export interface TrackData {
  id: number | null;
  title: string;
  publisher: string;
  mp3: string;
  artwork: string;
}

// Used for the API return type
interface podcastData {
  items: TrackData[];
}
// Context Types
type TrackContextType = {
  currentTrack: Track | null;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track | null>>;
  tracks: Track[];
  setTracks: React.Dispatch<React.SetStateAction<Track[]>>;
};

export const TracksContext = createContext<TrackContextType>({
  currentTrack: null,
  setCurrentTrack: () => {},
  tracks: [],
  setTracks: () => {},
});

interface TrackProviderProps {
  children: React.ReactNode;
}

export const TracksProvider: React.FC<TrackProviderProps> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    (async () => {
      const url =
        'https://raw.githubusercontent.com/sachieko/RN-AudioPlayer/main/episodes.json';
      await TrackPlayer.reset();
      const response = await axios.get<podcastData>(url);
      const structuredTracks: Track[] = response.data.items.map(item => {
        return { ...item, url: item.mp3 };
      });
      QueueInitialTracksService(structuredTracks);
      const queue: Track[] = await TrackPlayer.getQueue();
      setTracks(queue);
    })();
  }, []);

  const contextValue: TrackContextType = {
    currentTrack,
    setCurrentTrack,
    tracks,
    setTracks,
  };

  return (
    <TracksContext.Provider value={contextValue}>
      {children}
    </TracksContext.Provider>
  );
};
