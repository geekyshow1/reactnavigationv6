// Material Bottom Tabs Navigator
// A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './app/screen/HomeScreen';
import AboutScreen from './app/screen/AboutScreen';
import ContactScreen from './app/screen/ContactScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="About" component={AboutScreen} />
    //     <Tab.Screen name="Contact" component={ContactScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{}} labeled={true} activeColor='yellow' barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home Hai', tabBarIcon: () => <MaterialCommunityIcons name="home" color='blue' size={24} />, tabBarBadge: 10
        }} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

