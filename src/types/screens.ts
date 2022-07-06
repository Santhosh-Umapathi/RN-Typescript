import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigator';

type LoginScreen = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type SignupScreen = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
type HomeScreen = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type DashboardScreen = NativeStackNavigationProp<
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
