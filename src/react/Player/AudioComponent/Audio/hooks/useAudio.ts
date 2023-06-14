import { MutableRefObject, useEffect, useState } from 'react';
import { INITIAL_VOLUME } from '../constants';

import { formatTime } from '@/utils/timeWorkers';

export const useAudio = (
  audioRef: MutableRefObject<HTMLAudioElement | null>,
) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBuffering, setIsBuffering] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(INITIAL_VOLUME);
  const [currentTime, setCurrentTime] = useState<string>('00:00');

  const handlePauseAndPlayClick = () => {
    setIsPlaying(!isPlaying);
    const currentAudio = audioRef.current;

    if (currentAudio) {
      if (isPlaying) currentAudio.pause();
      else currentAudio.play();
    }
  };

  const handleTimeUpdate = (event: any) => {
    const newTime = event.target.currentTime;
    const duration = audioRef.current?.duration;
    setCurrentTime(formatTime(newTime));
    if (duration) {
      setProgress((newTime / duration) * 100);
    }
  };

  const handleUpdateProgress = (newProgress: number) => {
    const currentAudio = audioRef.current;
    const duration = currentAudio?.duration;
    if (duration) {
      const time = (newProgress / 100) * duration;
      if (Number.isFinite(time)) {
        setCurrentTime(formatTime(time));
        if (currentAudio) currentAudio.currentTime = time;
      }
    }
  };

  const handleUpdateVolume = (volumeNumber: number) => {
    const currentAudio = audioRef.current;
    if (currentAudio) {
      setVolume(volumeNumber);
      currentAudio.volume = Math.round(volumeNumber) / 100;
    }
  };

  const handleBufferingComplete = (event: any) => {};

  useEffect(() => {
    const currentAudio = audioRef.current;

    if (currentAudio) {
      currentAudio.addEventListener('timeupdate', handleTimeUpdate);
      currentAudio.addEventListener('loadeddata', handleBufferingComplete);
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener('timeupdate', handleTimeUpdate);
        currentAudio.removeEventListener('loadeddata', handleBufferingComplete);
      }
    };
  }, [handleTimeUpdate, handleBufferingComplete, audioRef]);

  return {
    isBuffering,
    isPlaying,
    currentTime,
    progress,
    volume,
    handleUpdateProgress,
    handleUpdateVolume,
    handlePauseAndPlayClick,
  };
};
