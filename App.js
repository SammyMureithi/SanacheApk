import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Consumer, LoginContext} from './Context/LoginContext';
import Authenitication from './Navigations/Authenitication';
import HomeScreen from './Navigations/HomeScreen';
import {Provider as PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <LoginContext>
        <Consumer>
          {Context => {
            return (
              <NavigationContainer>
                {Context.token === false ? <Authenitication /> : <HomeScreen />}
              </NavigationContainer>
            );
          }}
        </Consumer>
      </LoginContext>
    </PaperProvider>
  );
}

export default App;
