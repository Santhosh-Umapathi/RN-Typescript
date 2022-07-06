import React, {FC} from 'react';
import {
  SignupScreen,
  LoginScreen,
  HomeScreen,
  DashboardScreen,
} from '../screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigator';

const AuthStackNavigator = createNativeStackNavigator<RootStackParamList>();

const AuthStack: FC = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Group
        screenOptions={{
          headerLargeTitle: true,
          headerLargeStyle: {
            backgroundColor: '#282828',
          },
          headerLargeTitleStyle: {color: 'white'},
          headerBackVisible: false,
        }}>
        <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
        <AuthStackNavigator.Screen name="Signup" component={SignupScreen} />
      </AuthStackNavigator.Group>
      <AuthStackNavigator.Group
        screenOptions={{
          headerBackVisible: false,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#282828',
          },
          headerTitleStyle: {color: 'white'},
        }}>
        <AuthStackNavigator.Screen name="Home" component={HomeScreen} />
        <AuthStackNavigator.Screen
          name="Dashboard"
          component={DashboardScreen}
        />
      </AuthStackNavigator.Group>
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
