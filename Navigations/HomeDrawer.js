import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Customers from '../Screens/Customers';

function HomeDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Customers" component={Customers} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
