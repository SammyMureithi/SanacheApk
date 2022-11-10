import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeHeader from '../Components/HomeHeader';
import Home from '../Screens/Home';
import HomeDrawer from './HomeDrawer';

function HomeScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: () => <HomeHeader />}}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
