import React, {createContext, useState, useEffect} from 'react';

export interface Track {
  id: number | null;
  title: string;
  publisher: string;
  mp3: string;
  artwork: string;
}

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

export const MyProvider: React.FC<TrackProviderProps> = ({children}) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    setTracks([
      {
        id: 1,
        title: 'Monster',
        publisher: 'Starset',
        mp3: 'https://http.cat/200',
        artwork: 'https://http.cat/200',
      },
      {
        id: 2,
        title: 'The Sin and the Sentence',
        publisher: 'Trivium',
        mp3: 'https://http.cat/200',
        artwork: 'https://http.cat/200',
      },
    ]); // Replace with actual API call here.
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
