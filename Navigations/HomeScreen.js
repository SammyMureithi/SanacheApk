import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeHeader from '../Components/HomeHeader';
import Home from '../Screens/Home';
import HomeDrawer from './HomeDrawer';
import Sales from '../Screens/Sales';
import Transfers from '../Screens/Transfers';
import Expenses from '../Screens/Expenses';
import Deposit from '../Screens/Deposit';
import TrnasferHeader from '../Components/TrnasferHeader';

function HomeScreen({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: () => <HomeHeader />}}
      />
      <Stack.Screen
        name="Sales"
        component={Sales}
        options={{headerTintColor: 'green'}}
      />
      <Stack.Screen
        name="Transfers"
        component={Transfers}
        options={{
          headerRight: () => <TrnasferHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Expenses"
        component={Expenses}
        options={{headerTitle: 'Add Expenses'}}
      />
      <Stack.Screen name="Deposit" component={Deposit} />
    </Stack.Navigator>
  );
}

export default HomeScreen;
