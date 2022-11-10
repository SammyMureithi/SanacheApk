import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../Screens/ForgotPassword';
import Login from '../Screens/Login';

function Authenitication() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot_Password"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Authenitication;
