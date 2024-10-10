import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Alumnos/')({
  component: () => <div>Hello /(protectedRoutes)/Alumnos/!</div>,
});
