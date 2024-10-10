import React from 'react';
import { StyledTab, Wrapper } from './NavigationBar.styled';
import { Icon, IconProps } from '../Icon/Icon';
import { colors } from '../../utils/colors';
import { Typography } from '../Typography/Typography';
export type TabProps = {
  name: string;
  icon: IconProps['name'];
  isActive: boolean;
};

export type TabsProps = {
  tabs: TabProps[];
  activeTab: TabProps['name'];
};
const Tab = ({ name, icon, isActive }: TabProps) => {
  return (
    <StyledTab to={`/${name}`} $isActive={isActive}>
      <Icon
        name={icon}
        color={isActive ? colors.green : colors.fullWhite}
        size={24}
      />
      <Typography
        color={isActive ? colors.green : colors.fullWhite}
        fontFamily='Red Hat Text'
        fontSize={'12px'}
        fontWeight={400}
      >
        {name}
      </Typography>
    </StyledTab>
  );
};

export const NavigationBar = ({ tabs, activeTab }: TabsProps) => {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          name={tab.name}
          icon={tab.icon}
          isActive={activeTab === tab.name}
        />
      ))}
    </Wrapper>
  );
};
