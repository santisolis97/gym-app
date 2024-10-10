import { createFileRoute } from '@tanstack/react-router';
import { useSession } from '../../../hooks/session';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Inicio/')({
  component: Inicio,
});

function Inicio() {
  const { logout } = useSession();
  return <button onClick={logout}>Hello /(protectedRoutes)/Home/!</button>;
}
