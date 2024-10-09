import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protectedRoutes)/_layout/Perfil/')({
  component: () => <div>Hello /(protectedRoutes)/Perfil/!</div>,
})
