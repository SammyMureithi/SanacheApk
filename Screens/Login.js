import {Card, CardContent, TextInput, Button} from 'react-native-paper';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Consumer} from '../Context/LoginContext';

function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPasword] = useState('');
  const handleSubmit = async () => {
    console.log(await AsyncStorage.getItem('token'));
  };
  return (
    <Consumer>
      {Context => {
        function handleLogin() {
          Context.changeToken();
        }
        return (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Card
              style={{
                width: '80%',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Card.Content>
                <Image
                  source={require('../Images/Logo.jpeg')}
                  style={{
                    width: 150,
                    height: 150,
                    alignSelf: 'center',
                    top: 30,
                    marginBottom: 50,
                  }}
                />
                <TextInput
                  mode="outlined"
                  label="Username"
                  style={{width: 250}}
                  value={username}
                  onChangeText={username => setUsername(username)}
                />
                <TextInput
                  mode="outlined"
                  label="Password"
                  secureTextEntry={true}
                  style={{width: 250}}
                  value={password}
                  onChangeText={password => setPasword(password)}
                />
                <Button
                  style={{
                    backgroundColor: 'green',
                    marginTop: 20,
                    color: 'white',
                  }}
                  onPress={handleLogin}
                  mode="contained"
                  uppercase="true">
                  Login
                </Button>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Forgot_Password')}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      top: 10,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Forgot Password
                  </Text>
                </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
        );
      }}
    </Consumer>
  );
}

export default Login;
