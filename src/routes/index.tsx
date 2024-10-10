import { createFileRoute, redirect } from '@tanstack/react-router';
import { useSessionStore } from '../utils/useSessionStore';

export const Route = createFileRoute('/')({
  component: () => <div>Hello /!</div>,
  beforeLoad: async () => {
    const { session } = useSessionStore.getState();
    if (!session) {
      throw redirect({
        to: '/login',
      });
    } else {
      throw redirect({
        to: '/Inicio',
      });
    }
  },
});
