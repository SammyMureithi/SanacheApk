import React from 'react';
import {Image, Text, View} from 'react-native';
import {Card} from 'react-native-paper';

function HomeHeader() {
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
        <Image
          source={require('../Images/D.png')}
          style={{width: 30, height: 30}}
        />
      </Card.Content>
    </Card>
  );
}

export default HomeHeader;
