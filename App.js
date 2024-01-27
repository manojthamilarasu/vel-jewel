import { useState } from "react";
// 1. import `NativeBaseProvider` component
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasePage from "./screens/basePage";


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BasePage">
        <Stack.Screen name="BasePage" component={BasePage} options={{ title: 'BasePage' }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}