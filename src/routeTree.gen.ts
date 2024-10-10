/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as protectedRoutesLayoutImport } from './routes/(protectedRoutes)/_layout'
import { Route as protectedRoutesLayoutRutinaIndexImport } from './routes/(protectedRoutes)/_layout.Rutina/index'
import { Route as protectedRoutesLayoutNutricionIndexImport } from './routes/(protectedRoutes)/_layout.Nutricion/index'
import { Route as protectedRoutesLayoutInicioIndexImport } from './routes/(protectedRoutes)/_layout.Inicio/index'
import { Route as protectedRoutesLayoutBuscarIndexImport } from './routes/(protectedRoutes)/_layout.Buscar/index'
import { Route as protectedRoutesLayoutAlumnosIndexImport } from './routes/(protectedRoutes)/_layout.Alumnos/index'

// Create Virtual Routes

const protectedRoutesImport = createFileRoute('/(protectedRoutes)')()

// Create/Update Routes

const protectedRoutesRoute = protectedRoutesImport.update({
  id: '/(protectedRoutes)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const protectedRoutesLayoutRoute = protectedRoutesLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => protectedRoutesRoute,
} as any)

const protectedRoutesLayoutRutinaIndexRoute =
  protectedRoutesLayoutRutinaIndexImport.update({
    path: '/Rutina/',
    getParentRoute: () => protectedRoutesLayoutRoute,
  } as any)

const protectedRoutesLayoutNutricionIndexRoute =
  protectedRoutesLayoutNutricionIndexImport.update({
    path: '/Nutricion/',
    getParentRoute: () => protectedRoutesLayoutRoute,
  } as any)

const protectedRoutesLayoutInicioIndexRoute =
  protectedRoutesLayoutInicioIndexImport.update({
    path: '/Inicio/',
    getParentRoute: () => protectedRoutesLayoutRoute,
  } as any)

const protectedRoutesLayoutBuscarIndexRoute =
  protectedRoutesLayoutBuscarIndexImport.update({
    path: '/Buscar/',
    getParentRoute: () => protectedRoutesLayoutRoute,
  } as any)

const protectedRoutesLayoutAlumnosIndexRoute =
  protectedRoutesLayoutAlumnosIndexImport.update({
    path: '/Alumnos/',
    getParentRoute: () => protectedRoutesLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(protectedRoutes)': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedRoutesImport
      parentRoute: typeof rootRoute
    }
    '/(protectedRoutes)/_layout': {
      id: '/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedRoutesLayoutImport
      parentRoute: typeof protectedRoutesRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/(protectedRoutes)/_layout/Alumnos/': {
      id: '/_layout/Alumnos/'
      path: '/Alumnos'
      fullPath: '/Alumnos'
      preLoaderRoute: typeof protectedRoutesLayoutAlumnosIndexImport
      parentRoute: typeof protectedRoutesLayoutImport
    }
    '/(protectedRoutes)/_layout/Buscar/': {
      id: '/_layout/Buscar/'
      path: '/Buscar'
      fullPath: '/Buscar'
      preLoaderRoute: typeof protectedRoutesLayoutBuscarIndexImport
      parentRoute: typeof protectedRoutesLayoutImport
    }
    '/(protectedRoutes)/_layout/Inicio/': {
      id: '/_layout/Inicio/'
      path: '/Inicio'
      fullPath: '/Inicio'
      preLoaderRoute: typeof protectedRoutesLayoutInicioIndexImport
      parentRoute: typeof protectedRoutesLayoutImport
    }
    '/(protectedRoutes)/_layout/Nutricion/': {
      id: '/_layout/Nutricion/'
      path: '/Nutricion'
      fullPath: '/Nutricion'
      preLoaderRoute: typeof protectedRoutesLayoutNutricionIndexImport
      parentRoute: typeof protectedRoutesLayoutImport
    }
    '/(protectedRoutes)/_layout/Rutina/': {
      id: '/_layout/Rutina/'
      path: '/Rutina'
      fullPath: '/Rutina'
      preLoaderRoute: typeof protectedRoutesLayoutRutinaIndexImport
      parentRoute: typeof protectedRoutesLayoutImport
    }
  }
}

// Create and export the route tree

interface protectedRoutesLayoutRouteChildren {
  protectedRoutesLayoutAlumnosIndexRoute: typeof protectedRoutesLayoutAlumnosIndexRoute
  protectedRoutesLayoutBuscarIndexRoute: typeof protectedRoutesLayoutBuscarIndexRoute
  protectedRoutesLayoutInicioIndexRoute: typeof protectedRoutesLayoutInicioIndexRoute
  protectedRoutesLayoutNutricionIndexRoute: typeof protectedRoutesLayoutNutricionIndexRoute
  protectedRoutesLayoutRutinaIndexRoute: typeof protectedRoutesLayoutRutinaIndexRoute
}

const protectedRoutesLayoutRouteChildren: protectedRoutesLayoutRouteChildren = {
  protectedRoutesLayoutAlumnosIndexRoute:
    protectedRoutesLayoutAlumnosIndexRoute,
  protectedRoutesLayoutBuscarIndexRoute: protectedRoutesLayoutBuscarIndexRoute,
  protectedRoutesLayoutInicioIndexRoute: protectedRoutesLayoutInicioIndexRoute,
  protectedRoutesLayoutNutricionIndexRoute:
    protectedRoutesLayoutNutricionIndexRoute,
  protectedRoutesLayoutRutinaIndexRoute: protectedRoutesLayoutRutinaIndexRoute,
}

const protectedRoutesLayoutRouteWithChildren =
  protectedRoutesLayoutRoute._addFileChildren(
    protectedRoutesLayoutRouteChildren,
  )

interface protectedRoutesRouteChildren {
  protectedRoutesLayoutRoute: typeof protectedRoutesLayoutRouteWithChildren
}

const protectedRoutesRouteChildren: protectedRoutesRouteChildren = {
  protectedRoutesLayoutRoute: protectedRoutesLayoutRouteWithChildren,
}

const protectedRoutesRouteWithChildren = protectedRoutesRoute._addFileChildren(
  protectedRoutesRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof protectedRoutesLayoutRouteWithChildren
  '/login': typeof LoginIndexRoute
  '/Alumnos': typeof protectedRoutesLayoutAlumnosIndexRoute
  '/Buscar': typeof protectedRoutesLayoutBuscarIndexRoute
  '/Inicio': typeof protectedRoutesLayoutInicioIndexRoute
  '/Nutricion': typeof protectedRoutesLayoutNutricionIndexRoute
  '/Rutina': typeof protectedRoutesLayoutRutinaIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof protectedRoutesLayoutRouteWithChildren
  '/login': typeof LoginIndexRoute
  '/Alumnos': typeof protectedRoutesLayoutAlumnosIndexRoute
  '/Buscar': typeof protectedRoutesLayoutBuscarIndexRoute
  '/Inicio': typeof protectedRoutesLayoutInicioIndexRoute
  '/Nutricion': typeof protectedRoutesLayoutNutricionIndexRoute
  '/Rutina': typeof protectedRoutesLayoutRutinaIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof protectedRoutesRouteWithChildren
  '/_layout': typeof protectedRoutesLayoutRouteWithChildren
  '/login/': typeof LoginIndexRoute
  '/_layout/Alumnos/': typeof protectedRoutesLayoutAlumnosIndexRoute
  '/_layout/Buscar/': typeof protectedRoutesLayoutBuscarIndexRoute
  '/_layout/Inicio/': typeof protectedRoutesLayoutInicioIndexRoute
  '/_layout/Nutricion/': typeof protectedRoutesLayoutNutricionIndexRoute
  '/_layout/Rutina/': typeof protectedRoutesLayoutRutinaIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/Alumnos'
    | '/Buscar'
    | '/Inicio'
    | '/Nutricion'
    | '/Rutina'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/Alumnos'
    | '/Buscar'
    | '/Inicio'
    | '/Nutricion'
    | '/Rutina'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/login/'
    | '/_layout/Alumnos/'
    | '/_layout/Buscar/'
    | '/_layout/Inicio/'
    | '/_layout/Nutricion/'
    | '/_layout/Rutina/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  protectedRoutesRoute: typeof protectedRoutesRouteWithChildren
  LoginIndexRoute: typeof LoginIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  protectedRoutesRoute: protectedRoutesRouteWithChildren,
  LoginIndexRoute: LoginIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/",
        "/login/"
      ]
    },
    "/": {
      "filePath": "(protectedRoutes)",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "(protectedRoutes)/_layout.tsx",
      "parent": "/",
      "children": [
        "/_layout/Alumnos/",
        "/_layout/Buscar/",
        "/_layout/Inicio/",
        "/_layout/Nutricion/",
        "/_layout/Rutina/"
      ]
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/_layout/Alumnos/": {
      "filePath": "(protectedRoutes)/_layout.Alumnos/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/Buscar/": {
      "filePath": "(protectedRoutes)/_layout.Buscar/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/Inicio/": {
      "filePath": "(protectedRoutes)/_layout.Inicio/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/Nutricion/": {
      "filePath": "(protectedRoutes)/_layout.Nutricion/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/Rutina/": {
      "filePath": "(protectedRoutes)/_layout.Rutina/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
