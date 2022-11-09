import {Card, CardContent, TextInput, Button} from 'react-native-paper';
import React from 'react';
import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import {useState} from 'react';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState('');
  const [password, setPasword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card
        style={{
          width: '80%',
          height: '90%',
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
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <TextInput
              mode="outlined"
              label="Username"
              style={{width: 250}}
              value={username}
              onChangeText={username => setUsername(username)}
            />
            <TextInput
              mode="outlined"
              label="Phone Number"
              keyboardType="phone-pad"
              style={{width: 250}}
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            />
            <TextInput
              mode="outlined"
              label="Id"
              style={{width: 250}}
              value={id}
              onChangeText={id => setId(id)}
            />
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={true}
              style={{width: 250}}
              value={password}
              onChangeText={Password => setPasword(Password)}
            />
            <TextInput
              mode="outlined"
              label="Confirm Password"
              secureTextEntry={true}
              style={{width: 250}}
              value={confirmPassword}
              onChangeText={CPassword => setConfirmPassword(CPassword)}
            />
          </KeyboardAvoidingView>

          <Button
            style={{backgroundColor: 'green', marginTop: 20, color: 'white'}}
            mode="contained"
            uppercase="true">
            Reset Password
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

export default ForgotPassword;
