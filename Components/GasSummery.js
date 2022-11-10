import React from 'react';
import {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
function GasSummery({volume, percentG, percentE, Gas, Empties}) {
  const [widthPercentG, setWidth] = useState(percentG);
  const [widthPercentE, setWidthE] = useState(percentE);

  return (
    <Card style={{width: '90%', marginTop: 20}}>
      <Card.Content>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{volume}</Text>
            <Image source={require('../Images/rf.png')} />
          </View>
          <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                height: 20,
                backgroundColor: 'green',
                width: widthPercentG,
                borderBottomRightRadius: 50,
              }}>
              <Text style={{color: 'white'}}>{percentG}</Text>
            </View>
            <View
              style={{
                height: 20,
                backgroundColor: 'red',
                width: widthPercentE,
                borderBottomLeftRadius: 60,
              }}>
              <Text style={{color: 'white', left: 10}}>{percentE}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'black', fontWeight: '600'}}>Gas</Text>
            <Text style={{color: 'black', fontWeight: '600'}}>Empties</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>{Gas}</Text>
            <Text>{Empties}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

export default GasSummery;
