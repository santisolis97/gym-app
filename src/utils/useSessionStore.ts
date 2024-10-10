import { Session } from '@supabase/supabase-js';
import { redirect } from '@tanstack/react-router';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SessionStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      session: null,
      setSession: (session) => {
        set({
          session: session,
        });
      },
    }),
    {
      name: 'session-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
