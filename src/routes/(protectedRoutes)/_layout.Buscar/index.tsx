import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protectedRoutes)/_layout/Buscar/')({
  component: () => <div>Hello /(protectedRoutes)/Buscar/!</div>,
})
