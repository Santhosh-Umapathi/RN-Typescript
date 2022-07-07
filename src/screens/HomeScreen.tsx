import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductCard from '../components/screens/home/ProductCard';
import {HomeData, HomeDataType} from '../types/data/home';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={HomeData}
        keyExtractor={(key: HomeDataType) => `${key.id}`}
        renderItem={({item, index}) => <ProductCard {...{item, index}} />}
        style={{flex: 1, backgroundColor: 'white'}}
        contentContainerStyle={{alignItems: 'center'}}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
