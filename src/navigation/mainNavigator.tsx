import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';

const MainNavigator: FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
