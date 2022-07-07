import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigator';

export type LoginScreen = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type SignupScreen = NativeStackNavigationProp<
  RootStackParamList,
  'Signup'
>;
export type HomeScreen = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type DashboardScreen = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

export type LoginScreenProps = {
  navigation: LoginScreen;
};

export type SignupScreenProps = {
  navigation: SignupScreen;
};

export type HomeScreenProps = {
  navigation: HomeScreen;
};

export type DashboardScreenProps = {
  navigation: DashboardScreen;
};
