import { create } from 'zustand';

interface State {
  isPlaying: boolean;
  setPlaying(togle: boolean): void;
}

export const usePlayerSing = create<State>((set) => ({
  isPlaying: false,
  setPlaying: (isPlaying) => set({ isPlaying }),
}));
