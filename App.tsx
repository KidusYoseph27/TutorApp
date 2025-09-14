import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/screens/HomeScreen';
import TutorialScreen from './Src/screens/TutorialScreen';
import TutorialDetailScreen from './Src/screens/TutorialDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tutorials" component={TutorialScreen} />
        <Stack.Screen name="Detail" component={TutorialDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
