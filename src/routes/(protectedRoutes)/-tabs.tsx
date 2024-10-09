import { TabProps } from '../../components/NavigationBar/NavigationBar';

export const tabs: TabProps[] = [
  {
    name: 'Nutricion',
    icon: 'apple',
    isActive: false,
  },
  {
    name: 'Rutina',
    icon: 'dumbbell',
    isActive: false,
  },

  {
    name: 'Inicio',
    icon: 'home',
    isActive: true,
  },
  {
    name: 'Perfil',
    icon: 'profile',
    isActive: false,
  },
  {
    name: 'Buscar',
    icon: 'search',
    isActive: false,
  },
];
