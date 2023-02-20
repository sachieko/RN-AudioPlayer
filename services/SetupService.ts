import TrackPlayer from 'react-native-track-player';

export const SetupService = async () => {
  let isSetup = false;
  try {
    // this method will reject if player has not been setup yet
    await TrackPlayer.getState();
    isSetup = true;
  } catch {
    TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
};
