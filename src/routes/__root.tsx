import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';
import { getSession, onAuthChange, supabase } from '../utils/supabase';
import { useSessionStore } from '../utils/useSessionStore';
import { useShallow } from 'zustand/shallow';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { setSession } = useSessionStore(
    useShallow((state) => ({
      setSession: state.setSession,
    }))
  );
  React.useEffect(() => {
    getSession(setSession);

    const {
      data: { subscription },
    } = onAuthChange(setSession);

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <ToastContainer autoClose={1500} />
      <HeaderBar />
      <Outlet />
      {/* <TanStackRouterDevtools position='bottom-right' /> */}
    </>
  );
}
