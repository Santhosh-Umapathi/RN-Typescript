import React, {useState, FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input} from '../components';

//TODO: Fix better type checking
interface LoginScreenProps {
  navigation: {navigate: (arg: string) => void};
  route: object;
}

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState<string>('Jack.Sparrow@pirates.com');
  const [password, setPassword] = useState<string>('Jack@123');

  const loginHandler = (): void => {
    console.log(email, password);
    navigation.navigate('Home');
  };

  const goToSignup = (): void => {
    console.log(email, password);
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Input onChangeText={setEmail} placeholder="Email" value={email} />
      <Input
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
        secureTextEntry
      />

      <Button title="Login" onPress={loginHandler} />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={goToSignup} style={{marginTop: 10}}>
          <Text style={{color: 'orange', fontWeight: '600', fontSize: 16}}>
            {'Register'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 40,
  },
});

export default LoginScreen;
