import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useSessionStore } from '../../../utils/useSessionStore';
import { useShallow } from 'zustand/shallow';
import { logout } from '../../../utils/supabase';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Inicio/')({
  component: Inicio,
});

function Inicio() {
  const navigate = useNavigate();
  const { session } = useSessionStore(
    useShallow((state) => ({
      session: state.session,
    }))
  );
  const logOut = () => {
    logout();
    navigate({ to: '/login' });
  };
  return <button onClick={logOut}>Hello /(protectedRoutes)/Home/!</button>;
}
