// Native Stack Navigator
// Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
// @react-navigation/native-stack offers native performance and exposes native features such as large title on iOS etc., it may not be as customizable as @react-navigation/stack depending on your needs. 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screen/HomeScreen';
import AboutScreen from './app/screen/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerStyle: { backgroundColor: 'red' }, title: 'GeekyShows App', headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center', headerShown: true, }} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


