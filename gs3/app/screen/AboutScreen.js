import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={{ fontSize: 40 }}>About Screen</Text>
      <Link to={{ screen: 'Home' }} style={{ fontSize: 36 }}>Go to Home</Link>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
      <Button title='Close Drawer' onPress={() => navigation.closeDrawer()} />
      <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default AboutScreen;
