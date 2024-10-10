import { useShallow } from 'zustand/shallow';
import { useSessionStore } from '../utils/useSessionStore';
import { logout as supabaseLogout } from '../utils/supabase';
import { useNavigate } from '@tanstack/react-router';
export const useSession = () => {
  const { setSession } = useSessionStore(
    useShallow((state) => ({ setSession: state.setSession }))
  );
  const navigate = useNavigate();
  const logout = async () => {
    await supabaseLogout();
    setSession(null);
    navigate({ to: '/login' });
  };
  return { logout };
};
