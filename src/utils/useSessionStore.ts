import { Session } from '@supabase/supabase-js';
import avatar from '../images/assets/avatar.jpg';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Alumn } from '../components/AlumnDetails/AlumnDetails';

interface SessionStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
  alumn: Alumn;
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      session: null,
      alumn: {
        firstName: 'Tomás',
        lastName: 'Alejandro Vargas',
        plan: 'MUSCULACIÓN 5 DIAS',
        payment: 'AL DIA',
        owes: '-',
        due: '29/10/2024',
        accountState: 'ASISTE',
        profileImg: avatar,
        phone: '5493624132561',
      },
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
