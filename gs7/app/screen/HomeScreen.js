import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Home Screen</Text>
      <Button title='Login' onPress={() => navigation.navigate('UserPanelTab')} />
    </View>
  );
};


export default HomeScreen;
