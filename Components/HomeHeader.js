import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import {Consumer, LoginContext} from '../Context/LoginContext';

function HomeHeader() {
  return (
    <Consumer>
      {Context => {
        return (
          <Card
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            <Card.Content
              style={{
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
                padding: 0,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Images/dash.png')}
                style={{marginLeft: 10, width: 30, height: 30}}
              />
              <Text style={{fontSize: 23, color: 'black', fontWeight: 'bold'}}>
                DashBoard
              </Text>
              <TouchableOpacity onPress={Context.changeToken}>
                <Image
                  source={require('../Images/D.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </Card.Content>
          </Card>
        );
      }}
    </Consumer>
  );
}

export default HomeHeader;
