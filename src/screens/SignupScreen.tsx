import React, {useState, useEffect, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignupScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignupScreen</Text>
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
    fontSize: 16,
  },
});

export default SignupScreen;
