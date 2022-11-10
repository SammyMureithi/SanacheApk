import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';

function OtherSummery({title, content}) {
  return (
    <Card style={{width: '90%', margin: 10}}>
      <Card.Content>
        <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        <Text>{content}</Text>
      </Card.Content>
    </Card>
  );
}

export default OtherSummery;
