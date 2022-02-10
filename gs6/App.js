// Material Top Tabs Navigator
// A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './app/screen/HomeScreen';
import AboutScreen from './app/screen/AboutScreen';
import ContactScreen from './app/screen/ContactScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarStyle: { backgroundColor: 'yellow' }, }} tabBarPosition='top' >
    //     <Tab.Screen name="Home" component={HomeScreen} options={{
    //       title: 'Overview', tabBarLabel: 'Home Hai', tabBarShowLabel: true, tabBarLabelPosition: 'beside-icon', tabBarLabelStyle: { fontWeight: 'bold' }, tabBarIcon: () => <MaterialCommunityIcons name="home" color='blue' size={24} />, tabBarBadge: () => <Text>100</Text>, tabBarIndicatorStyle: { backgroundColor: 'red' }
    //     }} />
    //     <Tab.Screen name="About" component={AboutScreen} />
    //     <Tab.Screen name="Contact" component={ContactScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}


