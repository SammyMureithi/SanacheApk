import React, {createContext, useContext, useState} from 'react';
const {Provider, Consumer} = createContext();
function LoginContext(props) {
  const [token, setToken] = useState('false');
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
