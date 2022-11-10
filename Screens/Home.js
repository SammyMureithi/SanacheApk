import React from 'react';
import {Image, Text, View} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import FloatingActionButton from '../Components/FloatingActionButton';
import GasSummery from '../Components/GasSummery';

function Home() {
  /**{volume,percentG,percentE,Gas,Empties} */
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <GasSummery
        volume={'6kg'}
        percentG="68%"
        percentE={'32%'}
        Gas="170"
        Empties="80"
      />
      <GasSummery
        volume={'13kg'}
        percentG="44%"
        percentE={'56%'}
        Gas="110"
        Empties="140"
      />
    
      <FloatingActionButton />
    </View>
  );
}

export default Home;
