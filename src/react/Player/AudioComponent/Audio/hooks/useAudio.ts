import { useEffect, useRef, useState } from 'react';
import { INITIAL_VOLUME } from '../constants';

import { callToast } from '@/react/components/Toast';
import { ToastTypes } from '@/react/components/Toast/types';
import { formatTime } from '@/utils/timeWorkers';

export const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
      else
        currentAudio
          .play()
          .catch((error) => callToast(ToastTypes.warning, error.toString()));
    }
  };
  const handleTimeUpdate = (event) => {
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
  const handleCanPlay = () => setIsBuffering(false);
  const handleFinishedBuffering = () => setIsBuffering(true);

  useEffect(() => {
    const currentAudio = audioRef.current;

    if (currentAudio) {
      handleUpdateVolume(volume);
      currentAudio.addEventListener('timeupdate', handleTimeUpdate);
      currentAudio.addEventListener('loadedmetadata', handleCanPlay);
      currentAudio.addEventListener('canplaythrough', handleCanPlay);
      currentAudio.addEventListener('stalled', handleFinishedBuffering);
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener('timeupdate', handleTimeUpdate);
        currentAudio.removeEventListener('loadedmetadata', handleCanPlay);
        currentAudio.removeEventListener('canplaythrough', handleCanPlay);
        currentAudio.removeEventListener('stalled', handleFinishedBuffering);
      }
    };
  }, [handleTimeUpdate, audioRef]);

  return {
    audioRef,
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
