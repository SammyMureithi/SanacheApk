import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Login from './Screens/Login';
import Sign from './Screens/Sign';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from './Screens/Home';
import ForgotPassword from './Screens/ForgotPassword';
function App() {
  let store = 'false';
  const [loginState, setLoginState] = useState(null);
  const storeDate = async () => {
    await AsyncStorage.setItem('token', 'false');
    const token = await AsyncStorage.getItem('token');
    store = await AsyncStorage.getItem('token');
    setLoginState(token);
  };
  useEffect(() => {
    storeDate();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        {loginState == 'false' || loginState == null ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sign" component={Sign} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
