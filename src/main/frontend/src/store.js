import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      // 기존 상태 및 액션
      isLogined: false,
      setIsLogined: (value) => set({ isLogined: value }),

      // 새로운 상태 및 액션
      selectedRegion: '광화문·덕수궁',
      setSelectedRegion: (region) => set({ selectedRegion: region }),
    }),
    {
      name: 'app-state', // 로컬 스토리지에 저장될 상태의 이름
    }
  )
);

export default useStore;