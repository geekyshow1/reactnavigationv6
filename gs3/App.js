// Drawer Navigator
// Component that renders a navigation drawer which can be opened and closed via gestures.
// Note - To use it you have to config babel then clear cache using expo r -c

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/screen/HomeScreen';
import AboutScreen from './app/screen/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SideBar from './app/screen/SideBar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='About' component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName='Home' screenOptions={{
    //     headerStyle: { backgroundColor: 'red' }, drawerActiveBackgroundColor: 'red', drawerActiveTintColor: 'yellow', drawerStyle: { backgroundColor: 'blue', width: 300 }
    //   }} >
    //     <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: 'Home Hai', headerTitle: 'Dashboard', drawerIcon: props => <MaterialCommunityIcons name='home' size={30} color='white' style={{ padding: 2 }} /> }} />
    //     <Drawer.Screen name="About" component={AboutScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // Custom Drawer
    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
    //     <Drawer.Screen name='Home' component={HomeScreen} />
    //     <Drawer.Screen name='About' component={AboutScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

