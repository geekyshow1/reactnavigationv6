// Stack Navigator
// Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
// It's implemented in JavaScript and extremely customizable.
// It runs animations and gestures using natively, the performance may not be as fast as a native implementation.

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screen/HomeScreen';
import AboutScreen from './app/screen/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactScreen from './app/screen/ContactScreen';
import ServiceScreen from './app/screen/ServiceScreen';

const Stack = createStackNavigator()
// console.log(Stack);

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 24 }}>Home Screen</Text>
//     </View>
//   )
// }

// const AboutScreen = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 34 }}>About Screen</Text>
//     </View>
//   )
// }

export default function App() {
  return (
    // // Basic Navigation
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // // Navigator Props
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='About' screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // // Screen Props
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: 'red' }, title: 'GeekyShows App', headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center', headerShown: true, headerLeft: (props) => <MaterialCommunityIcons name="home" size={34} color='white' onPress={() => console.log('Home Clicked')} />, headerRight: (props) => <MaterialCommunityIcons name="bell-circle" size={34} color='white' style={{ padding: 15 }} onPress={() => console.log('Bell Clicked')} /> }} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // // Group
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="About" component={AboutScreen} />
    //     </Stack.Group>
    //     <Stack.Screen name="Service" component={ServiceScreen} />
    //     <Stack.Screen name="Contact" component={ContactScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // route and navigation Props AND Hook
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ id: 11 }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

