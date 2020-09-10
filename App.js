import 'react-native-gesture-handler'
import React from 'react';
import Explore from './screens/Explore';
import {
  View, Text, Button, StyleSheet
} from "react-native";


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Junior Developer
        </Text>
        <Text style={styles.welcome}>
          React | JavaScript | HTML | CSS | Express | MongoDB | React Native
        </Text>
      </View>
      <Button title="Go to Projects" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  }
}); 