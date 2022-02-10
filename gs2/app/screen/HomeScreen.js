import { View, Text } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Home Screen</Text>
      <Link to={{ screen: 'About' }} style={{ fontSize: 36 }}>Go to About</Link>
    </View>
  );
};


export default HomeScreen;
