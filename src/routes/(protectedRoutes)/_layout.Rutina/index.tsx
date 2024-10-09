import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protectedRoutes)/_layout/Rutina/')({
  component: () => <div>Hello /(protectedRoutes)/Rutina/!</div>,
})
