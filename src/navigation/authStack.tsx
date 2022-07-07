import React, {FC} from 'react';
import {
  SignupScreen,
  LoginScreen,
  HomeScreen,
  DashboardScreen,
} from '../screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigator';
import {View} from 'react-native';

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
          options={{
            gestureEnabled: true,
            headerLeft: () => (
              <>
                <View
                  style={{
                    width: 5,
                    height: 10,
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -2,
                    left: 0,
                  }}
                />
                <View
                  style={{
                    width: 20,
                    height: 3,
                    backgroundColor: 'red',
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50,
                  }}
                />
                <View
                  style={{
                    width: 5,
                    height: 10,
                    backgroundColor: 'red',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                  }}
                />
              </>
            ),
          }}
        />
      </AuthStackNavigator.Group>
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
