import React, {FC} from 'react';
import {TextInput, StyleSheet} from 'react-native';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
};

const Input: FC<Props> = ({
  placeholder = 'Enter text',
  onChangeText,
  value,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    padding: 14,
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#F2F2F2',
  },
});

export default Input;
