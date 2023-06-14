import React, { FC, useRef } from 'react';
import { useAudio } from './hooks/useAudio';
import { Progress } from './Progress';
import { IAudio } from './types';
import { Volume } from './Volume';
import pause from '@/assets/icons/pause.svg';
import play from '@/assets/icons/play.svg';
import styles from './Audio.module.scss';

export const Audio: FC<IAudio> = ({ src }: IAudio) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const {
    isBuffering,
    isPlaying,
    currentTime,
    progress,
    volume,
    handleUpdateProgress,
    handleUpdateVolume,
    handlePauseAndPlayClick,
  } = useAudio(audioRef);

  const pauseAndPlayImage = isPlaying ? pause : play;

  return (
    <div className={styles.Audio}>
      {isBuffering && (
        <div className={styles.Audio__loading}>
          <div className={styles.Audio__loadingLine} />
        </div>
      )}

      <img
        onClick={handlePauseAndPlayClick}
        src={pauseAndPlayImage}
        className={styles.Audio__pauseAndPlay}
        alt="pause-play-image"
      />

      <Progress
        className={styles.Audio__progress}
        progress={progress}
        setProgress={handleUpdateProgress}
      />

      <audio ref={audioRef}>
        <source src={src} />
      </audio>

      <footer className={styles.Audio__footer}>
        <div className={styles.Audio__time}>{currentTime}</div>
        <Volume progress={volume} setProgress={handleUpdateVolume} />
      </footer>
    </div>
  );
};
