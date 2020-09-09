import 'react-native-gesture-handler'
import React from 'react';
import Explore from './screens/Explore';
import {
  View, Text, Button
} from "react-native";


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to details" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Explore} />
      </Stack>
      <Explore></Explore>
    </NavigationContainer>
  );
}

