import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// This is the shape of the track data in the API
export interface Track {
  id: number | null;
  title: string;
  publisher: string;
  mp3: string;
  artwork: string;
}
// Used for the API return type
interface podcastData {
  items: Track[];
}
// The types of the Context provided
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

export const TracksProvider: React.FC<TrackProviderProps> = ({children}) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/taddylabs/RN-AudioPlayer/master/episodes.json';
    axios
      .get<podcastData>(url)
      .then(res => {
        setTracks([...res.data.items]);
      })
      .catch(error => {
        console.log(error);
      });
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
