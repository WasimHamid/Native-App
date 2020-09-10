import 'react-native-gesture-handler'
import React from 'react';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Explore from './screens/Explore';
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Wasim Hamid" component={HomeScreen} />
        <Stack.Screen name="Details" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}