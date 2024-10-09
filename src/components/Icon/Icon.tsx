import React from 'react';
import { iconMap } from '../../images/icons/icon';

export interface IconProps {
  name: keyof typeof iconMap;
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, color = 'black', size = 24 }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    <IconComponent
      style={{ fill: color, width: size, height: size }}
      aria-hidden='true'
    />
  );
};

export { Icon };
