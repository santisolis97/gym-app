import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protectedRoutes)/_layout/Nutricion/')({
  component: () => <div>Hello /(protectedRoutes)/Nutricion!</div>,
})
