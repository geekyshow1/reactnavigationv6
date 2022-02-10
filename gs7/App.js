// Nested Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screen/HomeScreen';
import UserPanelTab from './app/screen/UserPanelTab';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='UserPanelTab' component={UserPanelTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
