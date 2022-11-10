import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/Home';
import HomeDrawer from './HomeDrawer';

function HomeScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeScreen;
