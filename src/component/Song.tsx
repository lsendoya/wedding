import ReactPlayer from 'react-player';
import { Box, IconButton } from '@chakra-ui/react';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import { usePlayerSing } from '../store/player';

const AudioPlayer = () => {
  const { isPlaying, setPlaying } = usePlayerSing((state) => state);

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };

  return (
    <Box pos={'absolute'} right={0} top={0} bgColor={'var(--button-default)'}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=cNGjD0VG4R8"
        playing={isPlaying}
        width={0}
        height={0}
        controls={false}
      />
      <IconButton
        aria-label="Toggle Play/Pause"
        icon={isPlaying ? <MdMusicNote /> : <MdMusicOff />}
        onClick={togglePlayPause}
      />
    </Box>
  );
};

export default AudioPlayer;
