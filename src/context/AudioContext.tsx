'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { soundFX } from '@/utils/soundEffects';

interface AudioContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  soundEnabled: boolean;
  toggleSoundFX: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleMusic: () => {},
  soundEnabled: true,
  toggleSoundFX: () => {},
});

const AUDIO_TRACK = '/audio/Lukrembo - This Is For You (freetouse.com).mp3';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create HTML5 Audio element pointing to MP3 file
    const audio = new Audio(encodeURI(AUDIO_TRACK));
    audio.loop = true;
    audio.volume = 0.35; // Comfortable background volume
    audioRef.current = audio;

    // Try autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy until first user interaction
          setIsPlaying(false);
          const handleFirstInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
          };
          window.addEventListener('click', handleFirstInteraction);
          window.addEventListener('keydown', handleFirstInteraction);
          window.addEventListener('touchstart', handleFirstInteraction);
        });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    soundFX.playClick();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Audio play failed:', err));
    }
  };

  const toggleSoundFX = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFX.enabled = nextState;
    if (nextState) soundFX.playClick();
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleMusic, soundEnabled, toggleSoundFX }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
