import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const Button: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        width: '100%',
        alignItems: 'center',
        marginVertical: 40,
        overflow: 'hidden',
      }}>
      <View
        style={{
          backgroundColor: '#282828',
          width: '50%',
          borderRadius: 5,
          padding: 10,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
