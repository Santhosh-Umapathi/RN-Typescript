import React, {useState, FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input} from '../components';

interface SignupScreenProps {
  navigation: {navigate: (arg: string) => void};
  route: object;
}

const SignupScreen: FC<SignupScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState<string>('Jack.Sparrow@pirates.com');
  const [password, setPassword] = useState<string>('Jack@123');

  const signupHandler = (): void => {
    console.log(email, password);
    navigation.navigate('Home');
  };

  const goToLogin = (): void => {
    console.log(email, password);
    navigation.navigate('Login');
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

      <Button title="Sign Up" onPress={signupHandler} />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={goToLogin} style={{marginTop: 10}}>
          <Text style={{color: 'orange', fontWeight: '600', fontSize: 16}}>
            {'Login'}
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

export default SignupScreen;
