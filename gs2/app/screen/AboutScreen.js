import { View, Text } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

const AboutScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>About Screen</Text>
      <Link to={{ screen: 'Home' }} style={{ fontSize: 36 }}>Go to Home</Link>
    </View>
  );
};

export default AboutScreen;
