import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import TrackPlayer from 'react-native-track-player';
import { QueueInitialTracksService } from '../services/QueueTracksService';
// This is the shape of the track data in the API
export interface TrackData {
  id: number | null;
  title: string;
  publisher: string;
  mp3: string;
  artwork: string;
}
export interface Track extends TrackData {
  url: string;
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
  handlePlay: () => void;
  handlePause: () => void;
};

export const TracksContext = createContext<TrackContextType>({
  currentTrack: null,
  setCurrentTrack: () => {},
  tracks: [],
  setTracks: () => {},
  handlePlay: () => {},
  handlePause: () => {},
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
        'https://raw.githubusercontent.com/taddylabs/RN-AudioPlayer/master/episodes.json';
      const response = await axios.get<podcastData>(url);
      const structuredTracks = response.data.items.map(item => {
        return { ...item, url: item.mp3 };
      });
      setTracks(structuredTracks);
      QueueInitialTracksService(structuredTracks);
    })();
  }, []);

  const handlePlay = async (): Promise<void> => {
    await TrackPlayer.play();
  };
  const handlePause = async (): Promise<void> => {
    await TrackPlayer.pause();
  };

  const contextValue: TrackContextType = {
    currentTrack,
    setCurrentTrack,
    tracks,
    setTracks,
    handlePlay,
    handlePause,
  };

  return (
    <TracksContext.Provider value={contextValue}>
      {children}
    </TracksContext.Provider>
  );
};
