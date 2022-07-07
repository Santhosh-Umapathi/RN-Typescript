import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {HomeDataType} from '../../../types/data/home';

import {HomeScreen} from '../../../types/screens';

type Props = {
  item: HomeDataType;
  index: number;
};

const ProductCard: FC<Props> = props => {
  const {
    item: {id, image, name, price, color},
  } = props;

  const navigation = useNavigation<HomeScreen>();

  const goToDashboard = (): void => {
    navigation.navigate('Dashboard', {id});
  };

  return (
    <TouchableOpacity onPress={goToDashboard}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: color,
          margin: 10,
          padding: 10,
          borderRadius: 10,
          shadowColor: '#282828',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
        key={id}>
        <View style={{}}>
          <Image
            source={{uri: image}}
            style={{width: '100%', height: 80}}
            resizeMode="contain"
          />
        </View>
        <Text style={{fontWeight: 'bold'}}>{name}</Text>
        <Text style={{}}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
