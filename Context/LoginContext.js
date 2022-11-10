import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useState} from 'react';
const {Provider, Consumer} = createContext();
function LoginContext(props) {
  const [token, setToken] = useState('false');
  const StoreData = async () => {
    await AsyncStorage.setItem('name', 'Sammy');
    return await AsyncStorage.getItem('name');
  };
  function handleTokenChange() {
    if (token === 'false') {
      setToken('true');
    } else if (token === 'true') {
      setToken('false');
    }
  }
  return (
    <Provider
      value={{name: 'Mure', token: token, changeToken: handleTokenChange}}>
      {props.children}
    </Provider>
  );
}

export {LoginContext, Consumer};
