import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Login from './Screens/Login';
import Sign from './Screens/Sign';
import {Provider as PaperProvider} from 'react-native-paper';
function App() {
  const [loginState, setLoginState] = useState(null);
  const storeDate = async () => {
    await AsyncStorage.setItem('token', 'false');
    const token = await AsyncStorage.getItem('token');
    setLoginState(token);
  };
  useEffect(() => {
    storeDate();
    console.log(loginState);
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {loginState == 'false' ? (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen name="Sign" component={Sign} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
