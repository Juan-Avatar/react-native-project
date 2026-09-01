import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  usernameSaved: string;
  passwordSaved: string;
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  clearCredentials: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      usernameSaved: '',
      passwordSaved: '',
      isLoggedIn: false,
      login: (username, password) =>
        set({ usernameSaved: username, passwordSaved: password, isLoggedIn: true }),
      logout: () =>
        set({ isLoggedIn: false }),
      clearCredentials: () =>
        set({ usernameSaved: '', passwordSaved: '', isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
