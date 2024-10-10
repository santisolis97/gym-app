import {
  createFileRoute,
  Outlet,
  redirect,
  useLocation,
  useRouter,
} from '@tanstack/react-router';
import {
  ContentWrapper,
  LayoutWrapper,
  NavigationBarWrapper,
} from './-layout.styled';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { useState } from 'react';
import { tabs } from './-tabs';
import { useSessionStore } from '../../utils/useSessionStore';

export const Route = createFileRoute('/(protectedRoutes)/_layout')({
  component: Layout,
  beforeLoad: async () => {
    const { session } = useSessionStore.getState();
    if (!session) {
      throw redirect({
        to: '/login',
      });
    }
  },
});

function Layout() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <NavigationBarWrapper>
        <NavigationBar activeTab={pathname.replace('/', '')} tabs={tabs} />
      </NavigationBarWrapper>
    </LayoutWrapper>
  );
}
