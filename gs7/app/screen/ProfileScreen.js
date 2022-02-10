import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Profile Screen</Text>
      <Button title='Logout' onPress={() => navigation.navigate('Home')} />
    </View>

  );
};

export default ProfileScreen;
