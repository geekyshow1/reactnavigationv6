// Bottom Tabs Navigator
// A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screen/HomeScreen';
import AboutScreen from './app/screen/AboutScreen';
import ContactScreen from './app/screen/ContactScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='About' component={AboutScreen} />
        <Tab.Screen name='Contact' component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: 'red' }, tabBarStyle: { backgroundColor: 'yellow' } }}>
    //     <Tab.Screen name='Home' component={HomeScreen} options={{
    //       title: 'Overview', tabBarLabel: 'Home Hai', tabBarShowLabel: true, tabBarLabelPosition: 'beside-icon', tabBarLabelStyle: { fontWeight: 'bold' }, tabBarIcon: () => <MaterialCommunityIcons name="home" color='blue' size={24} />, tabBarBadge: 10
    //     }} />
    //     <Tab.Screen name='About' component={AboutScreen} />
    //     <Tab.Screen name='Contact' component={ContactScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}


